import Testimonial from "../Testimonial/Testimonial";
import TopFoods from "../TopFoods/TopFoods";

const SectionBlock2 = () => {
    return (
        <section className="container mx-auto bg-[#fcfcfc] mt-16 py-16 rounded-xl text-green">
            <TopFoods />
            <Testimonial />
        </section>
    );
};

export default SectionBlock2;
