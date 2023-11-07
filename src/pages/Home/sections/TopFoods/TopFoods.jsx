import useAxios from "../../../../hooks/useAxios/useAxios";
import ShortTitle from "../../../../components/ShortTitle/ShortTitle";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";
import PropTypes from "prop-types";

const TopFoods = () => {
    const axios = useAxios();

    const getFoods = async () => {
        return await axios.get("/mostSoldFoods");
    };

    const {
        data: foods,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["food"], queryFn: getFoods });

    const FoodBlock = ({ id, image, category, name, price }) => {
        return (
            <div className="shadow-lg rounded-b-md">
                <div
                    style={{ backgroundImage: `url('${image}')` }}
                    className="bg-center bg-cover bg-no-repeat rounded-t-md relative h-60 w-full"
                >
                    <span className="absolute rounded-[3px] w-fit font-extrabold uppercase text-xs tracking-[2px] top-6 left-6 bg-yellow px-3 pt-1 pb-px">
                        {category}
                    </span>
                </div>

                <div className="p-7 flex flex-col gap-3">
                    <h3 className="font-title text-3xl">{name}</h3>

                    <div className="flex justify-between items-center pt-5 border-t-[3px] border-dotted border-t-[#6254549c]">
                        <PrimaryButton link={`/foods/${id}`} text="Details" />

                        <h3 className="text-3xl">${price}</h3>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center px-8 xl:px-0 border-b-[5px] border-dotted border-b-[#6254549c] pb-16 mb-16">
            <ShortTitle text="Top sellers" />
            <h1 className="text-5xl font-title pb-10">Top selling foods</h1>

            {isLoading ? (
                <Spinner color="amber" className="h-16 w-16" />
            ) : isError ? (
                <p>Something went wrong.{error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
                    {foods?.data?.foods?.map((food) => (
                        <FoodBlock
                            key={food?._id}
                            id={food?._id}
                            image={food?.image}
                            category={food?.foodCategory}
                            name={food?.foodName}
                            price={food?.price}
                        />
                    ))}
                </div>
            )}

            <div className="text-center pt-14">
                <PrimaryButton text="See all foods" />
            </div>
        </div>
    );
};

TopFoods.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    shortDescription: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
};
export default TopFoods;
