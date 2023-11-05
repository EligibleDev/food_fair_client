import PropTypes from "prop-types";

const ShortTitle = ({ text }) => {
    return (
        <div className="flex justify-start items-start gap-4">
            <div className="bg-yellow h-[3px] rounded-full w-7 mt-1"></div>
            <h5 className="text-xs uppercase font-extrabold tracking-[2px]">{text}</h5>
        </div>
    );
};
ShortTitle.propTypes = {
    text: PropTypes.string,
};
export default ShortTitle;
