import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import PageTitle from "../../components/PageTitle/PageTitle";
import useAuth from "../../hooks/useAuth/useAuth";
import { Tooltip } from "@material-tailwind/react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const PurchaseFood = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const [reFetch, setReFetch] = useState(false);
    const axios = useAxios();

    const currentDate = new Date();

    const getFoodDetails = async () => {
        return await axios.get(`/food/${id}`);
    };

    const {
        data: foodDetails,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["foodDetails", reFetch], queryFn: getFoodDetails });

    const { _id, ...order } = foodDetails?.data ?? {};
    order.buyerInfo = user;
    order.buyingDate = currentDate;

    const { mutate } = useMutation({
        mutationKey: ["foodDetails"],
        mutationFn: (order) => {
            return axios.post("/orders", order);
        },
        onSuccess: () => {
            toast.success("Order Placed Successfully");
        },
        onError: (error) => {
            toast.error(error.message);
            console.error(error);
        },
    });

    //changing quantity and sales count

    const handlePlaceOrder = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                `foods/update_sales_quantity/${foodDetails.data._id}?quantity=${quantity}`,
                { quantity: quantity }
            );

            if (response.data.message === "Sales count updated successfully") {
                mutate(order);
                setQuantity(1);
                setReFetch(!reFetch);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    console.log(currentDate);

    return (
        <>
            <Helmet>
                <title>Purchase Food | Food Fair</title>
            </Helmet>
            <PageTitle shortTitle="purchase" title={foodDetails?.data?.foodName} />
            <section className="container mx-auto -mt-12 shadow-xl bg-[#fcfcfc] py-7 lg:py-16 rounded-xl text-green px-8 xl:px-0">
                {isLoading ? (
                    <LoadingSpinner />
                ) : isError ? (
                    <p>something went wrong.{error.message}</p>
                ) : (
                    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start ">
                        <img
                            src={foodDetails?.data?.image}
                            alt=""
                            className="w-full lg:w-1/2 rounded"
                        />

                        <div className="flex flex-col justify-start items-start w-full lg:w-1/2 px-7 gap-7">
                            <h1 className="text-5xl font-title">
                                {foodDetails?.data?.foodName}
                            </h1>

                            <h2 className="text-4xl">${foodDetails?.data?.price}</h2>

                            {foodDetails?.data?.quantity <= 0 ? (
                                <p className="text-2xl font-title text-red-500">
                                    This product is currently out of stock
                                </p>
                            ) : foodDetails?.data?.authorInfo?.email === user?.email ? (
                                <p className="text-2xl font-title text-red-500">
                                    You cant buy your own product
                                </p>
                            ) : (
                                <>
                                    <p className="text-2xl font-title">
                                        <b>{foodDetails?.data?.quantity}</b> in stock
                                    </p>
                                    <Tooltip
                                        className="font-title bg-yellow "
                                        placement="top-end"
                                        content="Buying Info (Read Only)"
                                    >
                                        <div className="bg-[var(--white)] p-2 rounded-md cursor-not-allowed">
                                            <p>Name: {user?.displayName}</p>
                                            <p>Email: {user?.email}</p>
                                            <p>
                                                Date:{" "}
                                                {
                                                    currentDate
                                                        .toLocaleString()
                                                        .split(",")[0]
                                                }
                                            </p>
                                        </div>
                                    </Tooltip>
                                    <form
                                        onSubmit={handlePlaceOrder}
                                        className="flex justify-start items-center gap-3"
                                    >
                                        <input
                                            onChange={(e) => setQuantity(e.target.value)}
                                            name="quantity"
                                            min={1}
                                            max={foodDetails?.data?.quantity}
                                            className="shadow-md py-4  pl-10 focus:outline-none rounded"
                                            type="number"
                                            value={quantity}
                                        />

                                        <PrimaryButton
                                            type="submit"
                                            text="Confirm Order"
                                        />
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default PurchaseFood;
