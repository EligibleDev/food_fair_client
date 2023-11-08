import { createContext } from "react";
import PropTypes from "prop-types";

export const UtilsContext = createContext();
const UtilsProvider = ({ children }) => {
    const serverURL = "http://localhost:5000/";
    const values = { serverURL };

    return <UtilsContext.Provider value={values}>{children}</UtilsContext.Provider>;
};
UtilsProvider.propTypes = {
    children: PropTypes.node,
};
export default UtilsProvider;
