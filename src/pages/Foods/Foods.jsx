import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios/useAxios";
import ShortTitle from "../../components/ShortTitle/ShortTitle";
import FoodCard from "../../components/FoodCard/FoodCard";

const Foods = () => {
    const axios = useAxios();

    const getFoods = async () => {
        return await axios.get("/foods");
    };

    const {
        data: foods,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["food"], queryFn: getFoods });

    console.table(foods.data)

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
                <div className="max-w-screen-xl mx-auto px-8 xl:px-0">
                    <div className="flex justify-between items-center">
                        <h1 className="text-5xl font-title">Search/ Filter</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
                        {foods?.data?.map((food) => (
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
                </div>
            </section>
        </>
    );
};

export default Foods;
