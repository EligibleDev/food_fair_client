import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../components/PageTitle/PageTitle";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
    const { id } = useParams();
    const axios = useAxios();

    const getFoodDetails = async () => {
        return await axios.get(`/food/${id}`);
    };

    const {
        data: foodDetails,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["foodDetails"], queryFn: getFoodDetails });

    return (
        <>
            <Helmet>
                <title> Food Details | Food Fair</title>
            </Helmet>
            <PageTitle shortTitle="welcome" title={foodDetails?.data?.foodName} />
            <section className="container mx-auto -mt-12 shadow-xl bg-[#fcfcfc] py-7 lg:py-16 rounded-xl text-green px-8 xl:px-0">
                {isLoading ? (
                    <LoadingSpinner />
                ) : isError ? (
                    <p>something went wrong.{error.message}</p>
                ) : (
                    <>
                        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start border-b-[5px] pb-16 border-dotted border-b-[#6254549c]">
                            <img
                                src={foodDetails?.data?.image}
                                alt=""
                                className="w-full lg:w-1/2 rounded"
                            />

                            <div className="flex flex-col justify-start items-start w-full lg:w-1/2 p-7 gap-7">
                                <h1 className="text-5xl font-title">
                                    {foodDetails?.data?.foodName}
                                </h1>

                                <h2 className="text-4xl">${foodDetails?.data?.price}</h2>

                                <div className="flex flex-col gap-2">
                                    <p>
                                        {
                                            foodDetails?.data?.shortDescription.split(
                                                "."
                                            )[0]
                                        }
                                    </p>

                                    <p>
                                        Category: <b>{foodDetails?.data?.foodCategory}</b>
                                    </p>

                                    <p>
                                        Origin: <b>{foodDetails?.data?.foodOrigin}</b>
                                    </p>

                                    <p>
                                        Author:{" "}
                                        <b>
                                            {foodDetails?.data?.authorInfo?.displayName}
                                        </b>
                                    </p>
                                </div>

                                <PrimaryButton
                                    link={`/purchase_food/${foodDetails?.data?._id}`}
                                    text="purchase"
                                />
                            </div>
                        </div>
                        <div className="max-w-screen-xl mx-auto">
                            <h3 className="text-3xl font-title pt-10 pb-4">
                                Description
                            </h3>
                            <p>{foodDetails?.data?.shortDescription}</p>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default FoodDetails;
