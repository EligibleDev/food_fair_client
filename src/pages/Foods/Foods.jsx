import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios/useAxios";
import FoodCard from "../../components/FoodCard/FoodCard";
import { Button, IconButton, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useCountries } from "use-react-countries";
import { FaArrowLeft, FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import PageTitle from "../../components/PageTitle/PageTitle";

const Foods = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
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
        return await axios.get(
            `/foods?category=${category}&country=${country}&page=${page}&limit=${limit}`
        );
    };

    const {
        data: foods,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["food", category, country, page, limit],
        queryFn: getFoods,
    });

    const totalPages = Math.ceil(foods?.data?.total / limit);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchValue(event.target.value);
        console.log(searchValue);
    };

    return (
        <>
            <PageTitle shortTitle="Shop" title="Find what you need" />

            <section className="container mx-auto -mt-12 shadow-xl bg-[#fcfcfc] py-16 rounded-xl text-green px-8 xl:px-0">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-12 border-b-[5px] pb-10 mb-12 border-dotted border-b-[#6254549c]">
                        <h1 className="text-5xl font-title flex-1">Search/Filter</h1>

                        <form
                            onSubmit={handleSearch}
                            className="relative flex w-full max-w-[24rem]"
                        >
                            <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                <FaMagnifyingGlass />
                            </div>
                            <input
                                value={searchValue}
                                onChange={handleSearch}
                                name="searchInput"
                                className="peer h-full w-full rounded-[7px] border border-yellow border-t-transparent bg-transparent px-3 py-[11px] !pr-9 text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow focus:border-t-transparent focus:outline-0"
                                placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-yellow peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-yellow ">
                                Search in page {page}
                            </label>
                        </form>

                        <div className="flex gap-4">
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                className="h-full w-full rounded-[7px] border border-yellow bg-transparent px-3 py-[11.5px] text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
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
                                className="h-full w-full rounded-[7px] border border-yellow bg-transparent px-3 py-[11.5px] text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            >
                                <option value={""}>Select Origin</option>
                                {countries.map(({ name }) => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {isLoading ? (
                        <Spinner color="amber" className="h-16 w-16" />
                    ) : isError ? (
                        <p>Something went wrong.{error}</p>
                    ) : foods?.data?.foods?.length ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
                            {foods?.data?.foods
                                ?.filter((food) =>
                                    food?.foodName
                                        .toLowerCase()
                                        .includes(searchValue.toLowerCase())
                                )
                                .map((food) => (
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
