import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios/useAxios";
import ShortTitle from "../../components/ShortTitle/ShortTitle";
import FoodCard from "../../components/FoodCard/FoodCard";
import { Button, IconButton, Spinner, step } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useCountries } from "use-react-countries";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Foods = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [page, setPage] = useState(1);
    const { countries } = useCountries();
    const axios = useAxios();
    const limit = 9;

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

    const getItemProps = (index) => ({
        variant: page === index ? "filled" : "text",
        className: page === index ? "bg-yellow" : "bg-[#fcfcfc]",
        onClick: () => setPage(index),
    });

    const next = () => {
        if (page === 5) return;
        setPage(page + 1);
    };

    const prev = () => {
        if (page === 1) return;
        setPage(page - 1);
    };

    const getFoods = async () => {
        return await axios.get(`/foods?category=${category}&country=${country}&page=${page}&limit=${limit}`);
    };

    const {
        data: foods,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["food", category, country, page, limit], queryFn: getFoods });
    console.log(foods)

    const totalPages = Math.ceil(foods?.data?.total / limit);

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
                            <option value={""}>Select Origin</option>
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

                <div className="flex justify-center pt-16 items-center gap-4">
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full text-green"
                        color="amber"
                        onClick={prev}
                        disabled={page === 1}
                    >
                        <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
                    </Button>
                    <div className="flex items-center gap-2">
                        {isLoading
                            ? ""
                            : Array(totalPages)
                                  .fill(0)
                                  .map((item, index) => {
                                      const pageNumber = index + 1;
                                      return (
                                          <IconButton
                                              key={pageNumber}
                                              className=""
                                              {...getItemProps(pageNumber)}
                                          >
                                              {pageNumber}
                                          </IconButton>
                                      );
                                  })}
                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full text-green"
                        color="amber"
                        onClick={next}
                        disabled={page === 5}
                    >
                        Next
                        <FaArrowRight strokeWidth={2} className="h-4 w-4" />
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Foods;
