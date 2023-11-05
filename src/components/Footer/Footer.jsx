import { Link, NavLink } from "react-router-dom";
import Socials from "../Socials/Socials";
import NavLinks from "../NavLinks/NavLinks";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="max-w-screen-xl mx-auto px-8 xl:px-0">
            <div className="flex py-14 justify-between items-center border-b-[5px] border-dotted border-b-[#6254549c]">
                <img className="w-28" src="/logo-light.png" alt="" />

                <div className="flex gap-2">
                    {Socials.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <IconComponent
                                key={index}
                                className="h-4 w-4 text-white hover:text-yellow cursor-pointer transition"
                                strokeWidth={2}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-14 border-b-[5px] border-dotted border-b-[#6254549c] gap-10">
                <div className="flex flex-col gap-6">
                    <h3 className="font-title text-3xl">About us</h3>
                    <p className="text-base">
                        Welcome to Food Fair, where passion for food meets a commitment to
                        excellence. Our journey began with a simple idea to create a
                        dining experience that delights the senses and brings people
                        together.
                    </p>

                    <Link className="text-yellow" href="#">
                        Read More
                    </Link>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="font-title text-3xl">Content info</h3>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <FaPhone />
                            <p className="text-base">+8801619152852</p>
                        </div>
                        <div className="flex justify-between">
                            <FaEnvelope />
                            <p className="text-base">mikailhossain0202@gmail.com</p>
                        </div>
                        <div className="flex justify-between">
                            <FaLocationDot />
                            <p className="text-base">Kushtia, Khulna, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="font-title text-3xl">Featured foods</h3>

                    <div className="flex justify-between items-center gap-1">
                        <img
                            className="w-24 sm:w-40 lg:w-24 rounded "
                            src="/fake-profile.jpg"
                            alt=""
                        />
                        <img
                            className="w-24 sm:w-40 lg:w-24 rounded "
                            src="/fake-profile.jpg"
                            alt=""
                        />
                        <img
                            className="w-24 sm:w-40 lg:w-24 rounded "
                            src="/fake-profile.jpg"
                            alt=""
                        />
                    </div>

                    <Link className="text-yellow" href="#">
                        See All Foods
                    </Link>
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 py-14 justify-between items-center">
                <p className="">© Food Fair 2023 . All rights reserved.</p>
                <div className="flex gap-4">
                    {NavLinks.map((link) => (
                        <NavLink
                            className={({ isActive }) =>
                                `transition duration-500 text-xs uppercase font-extrabold hover:text-yellow ${
                                    isActive ? "text-yellow" : "text-white"
                                }`
                            }
                            key={link?.name}
                            to={link?.path}
                        >
                            {link?.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
