import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PrimaryButton = ({ text, link, onClkFn, extraCls, icon, type }) => {
    const classes =
        "shadow-md shadow-yellow/20 hover:shadow-lg hover:shadow-yellow/40 active:shadow-none rounded bg-[var(--primary)] px-7 py-5 text-xs font-extrabold uppercase text-[var(--green)] tracking-[2px] transition-all duration-300  hover:scale-[1.015]";

    return link ? (
        <Link to={link}>
            <button className={`${classes} ${extraCls ? extraCls : ""}`}>
                {text ? text : icon}
            </button>
        </Link>
    ) : (
        <button
            type={type ? type : ""}
            onClick={onClkFn ? onClkFn : null}
            className={`${classes} ${extraCls ? extraCls : ""}`}
        >
            {text ? text : icon}
        </button>
    );
};

PrimaryButton.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    onClkFn: PropTypes.func,
    extraCls: PropTypes.string,
    icon: PropTypes.func,
    type: PropTypes.string,
};

export default PrimaryButton;
