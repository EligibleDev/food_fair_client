import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

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

    console.log(foodDetails)
    return <div>food details page</div>;
};

export default FoodDetails;
