import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios/useAxios";
import ShortTitle from "../../../../components/ShortTitle/ShortTitle";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const TopFoods = () => {
    const [foods, setFoods] = useState([]);
    const axios = useAxios();

    useEffect(() => {
        axios
            .get("/mostSoldFoods")
            .then((response) => {
                console.table(response.data);
                setFoods(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-8 xl:px-0 border-b-[5px] border-dotted border-b-[#6254549c] pb-16 mb-16">
            <div className="flex flex-col justify-center items-center pb-10">
                    <ShortTitle text="Bestsellers" />
                    <h1 className="text-5xl font-title">Top selling foods</h1>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
                {foods.map((food) => (
                    <div className="shadow-lg rounded-b-md" key={food?._id}>
                        <div
                            style={{ backgroundImage: `url('${food?.image}')` }}
                            className="bg-center bg-cover bg-no-repeat rounded-t-md relative h-60 w-full"
                        >
                            <span className="absolute rounded-[3px] w-fit font-extrabold uppercase text-xs tracking-[2px] top-6 left-6 bg-yellow px-3 pt-1 pb-px">
                                {food?.foodCategory}
                            </span>
                        </div>

                        <div className="p-7 flex flex-col gap-3">
                            <h3 className="font-title text-3xl">{food?.foodName}</h3>

                            <p className="">
                                {food?.shortDescription.slice(0, 125)}... ...
                            </p>

                            <div className="flex justify-between items-center pt-5 border-t-[3px] border-dotted border-t-[#6254549c]">
                                <PrimaryButton
                                    link={`/foods/${food?._id}`}
                                    text="Details"
                                />

                                <h3 className="text-3xl">${food?.price}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center pt-14">
                <PrimaryButton text="See all foods" />
            </div>
        </div>
    );
};

export default TopFoods;
