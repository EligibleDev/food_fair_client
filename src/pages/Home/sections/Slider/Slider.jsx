import { Carousel, IconButton } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Slide from "./Slide";

const Slider = () => {
    return (
        <Carousel
            className="h-screen"
            loop
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-11 left-[75px] lg:left-44 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "w-8 bg-yellow" : "w-4 bg-yellow/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute bottom-0 left-36 lg:left-60 -translate-y-2/4 text-xl text-white hover:text-yellow"
                >
                    <FaArrowLeft />
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute bottom-0 left-48 lg:left-72 -translate-y-2/4 text-xl text-white hover:text-yellow"
                >
                    <FaArrowRight />
                </IconButton>
            )}
        >
            <Slide title="Welcome to Food Fair" serial={1} />
            <Slide title="Reserve Your Table Today" serial={2} />
            <Slide title="Visit Our Online Shop" serial={3} />
        </Carousel>
    );
};

export default Slider;
