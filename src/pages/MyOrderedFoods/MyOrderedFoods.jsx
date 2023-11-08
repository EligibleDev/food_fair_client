import useAxios from "../../hooks/useAxios/useAxios";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth/useAuth";
import { IconButton } from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa6";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyOrderedFoods = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const [reFetch, setReFetch] = useState(false);
    const TABLE_HEAD = ["Image", "Name", "Price", "Date", "Author", "Delete"];

    console.log(user?.email);

    //getting user specific data
    const getMyFoods = async () => {
        return await axios.get(`/orders?email=${user?.email}`);
    };

    const {
        data: myFoods,
        isLoading,
        isError,
        error,
    } = useQuery({ queryKey: ["food", user, reFetch], queryFn: getMyFoods });

    const { mutate } = useMutation({
        mutationKey: ["order"],
        mutationFn: (id) => {
            setReFetch(!reFetch);
            return axios.delete(`/delete_order/${id}`);
        },
        onSuccess: () => {
            toast.success("Order Deleted Successfully");
            QueryClient.invalidateQueries({ queryKey: ["order", myFoods] });
        },
    });

    return (<>  <Helmet>
        <title>My Orders | Food Fair</title>
    </Helmet>
        <div className="p-5 flex justify-center items-start">
            {isLoading ? (
                <LoadingSpinner />
            ) : isError ? (
                <p>{error.message}</p>
            ) : !myFoods?.data.length ? (
                <h3 className="text-3xl font-title">
                    You didn&apos;t ordered any food yet
                </h3>
            ) : (
                <table className="w-full bg-yellow/50 table-auto text-left text-white rounded-md">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="bg-yellow/50 p-4">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {myFoods?.data?.map((food) => {
                            return (
                                <tr className="border-b border-b-green" key={food?._id}>
                                    <td className="p-4">
                                        <img
                                            src={food?.image}
                                            alt={food?.foodName}
                                            className="w-24 rounded-md"
                                        />
                                    </td>

                                    <td className="p-4">
                                        <b>{food?.foodName}</b>
                                    </td>
                                    <td className="p-4">${food?.price}</td>
                                    <td className="p-4">
                                        {food?.buyingDate?.toLocaleString().split("T")[0]}
                                    </td>
                                    <td className="p-4">{food?.authorInfo?.displayName}</td>

                                    <td className="p-4">
                                        <IconButton
                                            onClick={() => mutate(food?._id)}
                                            color="white"
                                            variant="text"
                                        >
                                            <FaTrash />
                                        </IconButton>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div></>
    );
};

export default MyOrderedFoods;
