import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import PropTypes from "prop-types";

const Slide = ({ title, serial }) => (
    <div
        style={{ backgroundImage: `url('/home-slide-${serial}.jpg')` }}
        className="bg-cover bg-center bg-no-repeat w-full h-full"
    >
        <div className="w-full h-full bg-[rgba(4,25,29,.5)]">
            <div className="max-w-screen-xl h-full mx-auto px-8 xl:px-0 pt-20">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start gap-6">
                    <div className="flex justify-start items-start gap-4">
                        <div className="bg-yellow h-[3px] rounded-full w-7 mt-1"></div>
                        <h5 className="text-xs uppercase font-extrabold tracking-[2px]">
                            hello friend!
                        </h5>
                    </div>

                    <h1 className="font-title text-5xl sm:text-7xl lg:text-8xl">{title}</h1>

                    <p className="">
                        Indulge in a symphony of flavors that will transport your taste
                        buds to culinary paradise at our restaurant
                    </p>

                    <PrimaryButton text="All Products" />
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
