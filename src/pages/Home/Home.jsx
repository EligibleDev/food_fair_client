import About from "./sections/About/About";
import Slider from "./sections/Slider/Slider";
import Testimonial from "./sections/Testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Testimonial/>
        </>
    );
};

export default Home;
