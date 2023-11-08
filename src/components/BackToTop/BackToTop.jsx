import { FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a
            id="scrollButton"
            href="#top"
            style={{
                display: showButton ? "block" : "none",
            }}
            className="fixed bottom-6 right-6 shadow-md shadow-yellow/20 hover:shadow-lg hover:shadow-yellow/40 active:shadow-none rounded bg-[var(--primary)] px-7 py-5 text-xs font-extrabold uppercase text-[var(--green)] tracking-[2px] transition-all duration-300  hover:scale-[1.015]"
        >
            <FaArrowUp className="text-white" />
        </a>
    );
};

export default BackToTop;
