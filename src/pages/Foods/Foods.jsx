import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios/useAxios";
import ShortTitle from "../../components/ShortTitle/ShortTitle";
import FoodCard from "../../components/FoodCard/FoodCard";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useCountries } from "use-react-countries";

const Foods = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [page, setPage] = useState(1);
    const { countries } = useCountries();
    const axios = useAxios();

    console.log(country, category);

    //getting categories
    const fetchCategories = async () => {
        try {
            const res = await axios.get("/categories");
            setCategories(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    const getFoods = async () => {
        return await axios.get(`/foods?category=${category}&country=${country}`);
    };

    const {
        data: foods,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["food", category, country], queryFn: getFoods });

    return (
        <>
            <div
                className="bg-center bg-cover "
                style={{ backgroundImage: `url('/page-header-bg.jpg')` }}
            >
                <div className="w-full h-96 flex flex-col justify-center items-center bg-[rgba(4,25,29,.5)]">
                    <ShortTitle text="Shop" />
                    <h1 className="text-5xl font-title pb-10">Find what you need</h1>
                </div>
            </div>

            <section className="container mx-auto bg-[#fcfcfc] py-16 rounded-xl text-green px-8 xl:px-0">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="flex justify-between items-center border-b-[5px] pb-10 mb-12 border-dotted border-b-[#6254549c]">
                        <h1 className="text-5xl font-title flex-1">Search / Filter</h1>

                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className="h-full w-full rounded-[7px] border border-yellow bg-transparent px-3 py-2.5 text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                            <option value={""}>Select Category</option>
                            {categories.map((item) => (
                                <option key={item?._id} value={item?.category}>
                                    {item?.category}
                                </option>
                            ))}
                        </select>

                        <select
                            onChange={(e) => setCountry(e.target.value)}
                            className="h-full w-full rounded-[7px] border border-yellow bg-transparent px-3 py-2.5 text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                            <option value={""}>Select Country</option>
                            {countries.map(({ name }) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {isLoading ? (
                        <Spinner color="amber" className="h-16 w-16" />
                    ) : isError ? (
                        <p>Something went wrong.{error}</p>
                    ) : foods?.data?.foods?.length ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
                            {foods?.data?.foods?.map((food) => (
                                <FoodCard
                                    key={food?._id}
                                    id={food?._id}
                                    image={food?.image}
                                    category={food?.foodCategory}
                                    name={food?.foodName}
                                    shortDescription={food?.shortDescription}
                                    price={food?.price}
                                    quantity={food?.quantity}
                                />
                            ))}
                        </div>
                    ) : (
                        <h3 className="text-3xl font-title">
                            No data found on this filter, Try something else
                        </h3>
                    )}
                </div>
            </section>
        </>
    );
};

export default Foods;
