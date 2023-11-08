import { useEffect, useState } from "react";
import { useCountries } from "use-react-countries";
import useAxios from "../../hooks/useAxios/useAxios";
import useAuth from "../../hooks/useAuth/useAuth";
import { Tooltip } from "@material-tailwind/react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddFood = () => {
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [country, setCountry] = useState("");
    const [foodName, setFoodName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const { countries } = useCountries();
    const axios = useAxios();
    const { user } = useAuth();

    console.log(category);

    const handleAddFood = (event) => {
        event.preventDefault();

        const authorInfo = user;
        const timesSold = 0;
        const foodCategory = category;
        const foodOrigin = country;

        const newFood = {
            foodName,
            image,
            foodCategory,
            price,
            authorInfo,
            foodOrigin,
            shortDescription,
            quantity,
            timesSold,
        };

        mutate(newFood)

        console.log(newFood);
    };

    const { mutate } = useMutation({
        mutationKey: ["food"],
        mutationFn: (food) => {
            console.log(food);
            return axios.post("/foods", food);
        },
        onSuccess: () => {
            console.log("food successfully sent to database");
        },
        onError: (error) => {
            toast.error(error.message);
            console.error(error);
        },
    });

    const fetchCategories = async () => {
        try {
            const res = await axios.get("/categories");
            setCategories(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="p-5 flex justify-center items-center">
            <form
                action=""
                className="flex flex-col gap-3 justify-center w-full"
                onSubmit={handleAddFood}
            >
                <div className="flex gap-3">
                    <input
                        required
                        placeholder="Product name"
                        className="bg-transparent border-2 border-yellow border-box pl-4 text-white w-full py-2 focus:outline-0 shadow-lg rounded-md"
                        name="name"
                        type="text"
                        onChange={(e) => setFoodName(e.target.value)}
                    />
                    <input
                        required
                        placeholder="Price"
                        className="bg-transparent border-2 border-yellow border-box pl-4 text-white w-full py-2 focus:outline-0 shadow-lg rounded-md"
                        name="price"
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="flex gap-3">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-black h-full w-full rounded-[7px] border border-yellow bg-transparent px-3 py-[11.5px] text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 bg-black"
                    >
                        <option className="bg-black text-white" value={""}>
                            Select category
                        </option>
                        {categories?.map((item) => (
                            <option
                                className="bg-black text-white"
                                key={item?._id}
                                value={item?.category}
                            >
                                {item?.category}
                            </option>
                        ))}
                    </select>

                    <select
                        onChange={(e) => setCountry(e.target.value)}
                        className="bg-black h-full w-full rounded-[7px] border border-yellow bg-transparent px-3 py-[11.5px] text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 bg-black"
                    >
                        <option className="bg-black" value={""}>
                            Select Origin
                        </option>
                        {countries?.map(({ name }) => (
                            <option className="bg-black" key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-3">
                    <input
                        required
                        placeholder="Quantity"
                        className="bg-transparent border-2 border-yellow border-box pl-4 text-white w-full py-2 focus:outline-0 shadow-lg rounded-md"
                        name="quantity"
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Tooltip
                        className="font-title bg-yellow "
                        placement="top-end"
                        content="Author Info (Read Only)"
                    >
                        <input
                            disabled
                            className="bg-transparent border-2 cursor-not-allowed border-yellow border-box pl-4 text-white w-full py-2 focus:outline-0 shadow-lg rounded-md"
                            name="email"
                            type="email"
                            placeholder={`${user.displayName} (${user?.email})`}
                        />
                    </Tooltip>
                </div>
                <input
                    required
                    placeholder="Photo URL"
                    className="bg-transparent border-2 border-yellow border-box pl-4 text-white w-full py-2 focus:outline-0 shadow-lg rounded-md"
                    name="image"
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                />
                <textarea
                    required
                    placeholder="Short Description"
                    className="bg-transparent border-2 border-yellow border-box p-4 text-white w-full py-2 focus:outline-0 shadow-lg rounded-md"
                    name="description"
                    rows="9"
                    onChange={(e) => setShortDescription(e.target.value)}
                ></textarea>

                <PrimaryButton
                    text="Add Food"
                    extraCls="w-fit"
                    onClkFn={handleAddFood}
                    type="submit"
                />
            </form>
        </div>
    );
};

export default AddFood;
