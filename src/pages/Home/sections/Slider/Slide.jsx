import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import PropTypes from "prop-types";
import ShortTitle from "../../../../components/ShortTitle/ShortTitle";

const Slide = ({ title, serial }) => (
    <div
        style={{ backgroundImage: `url('/home-slide-${serial}.jpg')` }}
        className="bg-cover bg-fixed bg-center bg-no-repeat w-full h-full"
    >
        <div className="w-full h-full bg-[rgba(4,25,29,.5)]">
            <div className="max-w-screen-xl h-full mx-auto px-8 xl:px-0 pt-20">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start gap-6">
                    <ShortTitle text="hello friend!"/>

                    <h1 className="font-title text-5xl sm:text-7xl lg:text-8xl">
                        {title}
                    </h1>

                    <p className="">
                        Indulge in a symphony of flavors that will transport your taste
                        buds to culinary paradise at our restaurant
                    </p>

                    <PrimaryButton link="/foods" text="All Products" />
                </div>
            </div>
        </div>
    </div>
);
Slide.propTypes = {
    title: PropTypes.string,
    serial: PropTypes.number,
};
export default Slide;
