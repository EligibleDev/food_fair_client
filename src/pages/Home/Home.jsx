import { Helmet } from "react-helmet-async";
import About from "./sections/About/About";
import SectionBlock2 from "./sections/SectionBlock2/SectionBlock2";
import Slider from "./sections/Slider/Slider";

const Home = () => {
    return (
        <>  <Helmet>
        <title>Food Fair - We have everything to fill you</title>
    </Helmet>
            <Slider />
            <About />
            <SectionBlock2 />
        </>
    );
};

export default Home;
