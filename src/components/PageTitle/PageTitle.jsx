import ShortTitle from "../ShortTitle/ShortTitle";
import PropTypes from "prop-types";

const PageTitle = ({ shortTitle, title }) => {
    return (
        <div
            className="bg-center bg-cover "
            style={{ backgroundImage: `url('/page-header-bg.jpg')` }}
        >
            <div className="w-full h-96 flex flex-col justify-center items-center bg-[rgba(4,25,29,.5)]">
                <ShortTitle text={shortTitle} />
                <h1 className="text-5xl text-center font-title pb-10">{title}</h1>
            </div>
        </div>
    );
};
PageTitle.propTypes = {
    shortTitle: PropTypes.string,
    title: PropTypes.string,
};
export default PageTitle;
