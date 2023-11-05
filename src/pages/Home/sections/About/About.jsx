import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import ShortTitle from "../../../../components/ShortTitle/ShortTitle";
import Socials from "../../../../components/Socials/Socials";

const About = () => {
    return (
        <section className="container mx-auto bg-[#fcfcfc] py-16 rounded-xl text-green">
            <div className="max-w-screen-xl mx-auto border-b-[5px] pb-16 border-dotted border-b-[#6254549c] flex gap-8 justify-between items-center">
                <div
                    style={{ backgroundImage: `url('/video-bg.jpg')` }}
                    className="bg-cover bg-center bg-no-repeat w-1/2 h-[560px] rounded"
                ></div>

                <div className="flex flex-col gap-7 w-1/2 justify-center items-start">
                    <ShortTitle text="About Us" />

                    <h1 className="text-5xl font-title">
                        We invite you to visit our restaurant
                    </h1>

                    <p>
                        At Food Fair, we are passionate about creating memorable dining
                        experiences. With a rich culinary heritage and a commitment to
                        using the finest, locally-sourced ingredients, we take pride in
                        crafting exquisite dishes that delight the senses. Our talented
                        chefs, dedicated staff, and inviting ambiance come together to
                        ensure that every visit is a culinary journey to savor. Whether
                        you are joining us for a special occasion or a casual meal, we
                        invite you to savor the essence of our cuisine and the warmth of
                        our hospitality. Welcome to [Restaurant Name], where we celebrate
                        the art of food and the joy of sharing it with you.
                    </p>

                    <div className="flex gap-8 items-center">
                        <PrimaryButton text="order now" />
                        <div className="flex gap-2">
                            {Socials.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <IconComponent
                                        key={index}
                                        className="h-4 w-4 text-green hover:text-yellow cursor-pointer transition"
                                        strokeWidth={2}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url('/working-hour-bg.jpg')` }}
                className="max-w-screen-xl mx-auto text-[var(--white)] mt-16 rounded  "
            >
                <div className="w-full h-full bg-[rgba(4,25,29,.5)] rounded flex justify-between items-center p-6 pl-16">
                    <div className="flex flex-col justify-center items-start gap-6">
                        <ShortTitle text="working hours" />
                        <h1 className="text-6xl">Working hours</h1>
                        <p className="">
                            These are our working hours. You can come in these times only.
                        </p>
                        <div className="flex items-center gap-6">
                            <PrimaryButton text="order now" />{" "}
                            <Link className="text-white" href="#">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-5 justify-center text-green items-center bg-white rounded p-14">
                        <h5 className="text-xs uppercase font-extrabold tracking-[2px]">
                            SUNDAY TO TUESDAY
                        </h5>

                        <div className="">
                            <h4 className="text-2xl font-bold">
                                09 <span className="text-yellow">:</span>00
                            </h4>
                            <h4 className="text-2xl font-bold">
                                22 <span className="text-yellow">:</span>00
                            </h4>
                        </div>
                        <h5 className="text-xs uppercase font-extrabold tracking-[2px]  ">
                            SUNDAY TO TUESDAY
                        </h5>

                        <div className="">
                            <h4 className="text-2xl font-bold">
                                09 <span className="text-yellow">:</span>00
                            </h4>
                            <h4 className="text-2xl font-bold">
                                22 <span className="text-yellow">:</span>00
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
