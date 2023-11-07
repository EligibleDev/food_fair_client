import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PropTypes from "prop-types";

const FoodCard = ({ id, image, category, name, shortDescription, price, quantity }) => {
    return (
        <div className="shadow-lg rounded-b-md">
            <div
                style={{ backgroundImage: `url('${image}')` }}
                className="bg-center bg-cover bg-no-repeat rounded-t-md relative h-60 w-full"
            >
                <span className="absolute rounded-[3px] w-fit font-extrabold uppercase text-xs tracking-[2px] top-6 left-6 bg-yellow px-3 pt-1 pb-px">
                    {category}
                </span>

                <span className="absolute rounded-[3px] w-fit font-extrabold uppercase text-xs tracking-[2px] bottom-6 right-6 bg-yellow px-3 pt-1 pb-px">
                    {quantity ? `${quantity} in stock` : "out of stock"}
                </span>
            </div>

            <div className="p-7 flex flex-col gap-3">
                <h3 className="font-title text-3xl">{name}</h3>

                <p className="">{shortDescription.slice(0, 125)}... ...</p>

                <div className="flex justify-between items-center pt-5 border-t-[3px] border-dotted border-t-[#6254549c]">
                    <PrimaryButton link={`/foods/${id}`} text="Details" />

                    <h3 className="text-3xl">${price}</h3>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    shortDescription: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
};
export default FoodCard;
