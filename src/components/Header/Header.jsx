import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ProfileMenu from "./ProfileMenu";
import { Link, NavLink } from "react-router-dom";
import { Collapse, IconButton } from "@material-tailwind/react";
import { HiMenu } from "react-icons/hi";
import NavLinks from "../NavLinks/NavLinks";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    return (
        <header
            id="header"
            className="container mx-auto pl-8 pr-2 py-4 lg:py-0 rounded-none sm:rounded-lg sticky z-[999999] top-0 sm:top-4 shadow-[0_5px_10px_0_rgba(26,47,51,.2)]  left-0 right-0 bg-white "
        >
            <nav className="flex justify-between items-center">
                <Link to="/" className="">
                    <img className="w-24" id="logo" src="/logo.png" alt="" />
                </Link>
                <nav className="lg:flex flex-1 gap-2 justify-center items-end hidden">
                    {NavLinks.map((link) => (
                        <NavLink
                            className="border-b-[6px] border-white hover:border-[var(--primary)] h-full flex justify-center items-center transition duration-500 text-xs uppercase font-extrabold text-[var(--green)]"
                            key={link?.name}
                            to={link?.path}
                        >
                            <span className="p-6">{link?.name}</span>
                        </NavLink>
                    ))}
                </nav>
                <nav className="lg:hidden flex-1 text-center">
                    <IconButton
                        size="sm"
                        // color="yellow"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className=""
                    >
                        <HiMenu className="h-6 w-6" />
                    </IconButton>
                </nav>
                <nav>
                    {/* <ProfileMenu /> */}

                    <span className="hidden lg:block">
                        <PrimaryButton link="login" text="login" />
                    </span>
                </nav>
            </nav>
            <Collapse
                open={isNavOpen}
                className="flex flex-col justify-center items-center gap-3 overflow-hidden"
            >
                {NavLinks.map((link) => (
                    <NavLink
                        className={({ isActive }) =>
                            `transition duration-500 text-xs uppercase font-extrabold ${
                                isActive ? "text-yellow" : "text-green"
                            }`
                        }
                        key={link?.name}
                        to={link?.path}
                    >
                        <span className="p-1">{link?.name}</span>
                    </NavLink>
                ))}
                <PrimaryButton link="/login" icon={FiLogIn} text="login" />
            </Collapse>
        </header>
    );
};

export default Header;
