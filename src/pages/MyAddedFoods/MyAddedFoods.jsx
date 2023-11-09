import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxios from "../../hooks/useAxios/useAxios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Helmet } from "react-helmet-async";

const MyAddedFoods = () => {
    const axios = useAxios();
    const { user } = useAuth();

    const getMyAddedFoods = async () => {
        return await axios.get(`/foods?email=${user?.email}`);
    };

    const {
        data: myFoods,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["food", user], queryFn: getMyAddedFoods });

    console.log(myFoods?.data?.foods);

    return (
        <>
            {" "}
            <Helmet>
                <title>Dashboard | Food Fair</title>
            </Helmet>
            <div className="p-5 flex w-full items-start text-[var(--white)]">
                {isLoading ? (
                    <LoadingSpinner />
                ) : isError ? (
                    <p>{error.message}</p>
                ) : myFoods?.data?.foods.length === 0 ? (
                    <h3 className="text-3xl font-title">
                        You didn&apos;t added any food yet
                    </h3>
                ) : (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {myFoods?.data?.foods?.map((food) => (
                            <div
                                key={food?._id}
                                className="shadow-lg rounded-b-md border-2 border-yellow rounded-md"
                            >
                                <div
                                    style={{ backgroundImage: `url('${food?.image}')` }}
                                    className="bg-center bg-cover bg-no-repeat rounded-t-md relative h-60 w-full"
                                >
                                    <span className="absolute rounded-[3px] w-fit font-extrabold uppercase text-xs tracking-[2px] top-6 left-6 bg-yellow px-3 pt-1 pb-px">
                                        {food?.foodCategory}
                                    </span>
                                    {food?.quantity > 0 ? (
                                        <span
                                            className={`absolute rounded-[3px] w-fit font-extrabold uppercase text-xs tracking-[2px] bottom-6 right-6 bg-yellow px-3 pt-1 pb-px`}
                                        >
                                            {food?.quantity} in stock
                                        </span>
                                    ) : (
                                        <span
                                            className={`absolute rounded-[3px] w-fit font-extrabold uppercase text-xs tracking-[2px] bottom-6 right-6 bg-red-500 px-3 pt-1 pb-px`}
                                        >
                                            Out of stock
                                        </span>
                                    )}
                                </div>
                                <div className="p-7 flex flex-col gap-3">
                                    <h3 className="font-title text-3xl">
                                        {food?.foodName}
                                    </h3>

                                    <div className="flex justify-between items-center pt-5 border-t-[3px] border-dotted border-t-[#6254549c]">
                                        <PrimaryButton
                                            link={`/profile/update_food/${food?._id}`}
                                            text="Update"
                                        />
                                        <h3 className="text-3xl">${food?.price}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default MyAddedFoods;
