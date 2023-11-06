import { createContext } from "react";
import PropTypes from "prop-types";

export const UtilsContext = createContext();
const UtilsProvider = ({ children }) => {
    const serverURL = "my server url";
    const values = { serverURL };

    return <UtilsContext.Provider value={values}>{children}</UtilsContext.Provider>;
};
UtilsProvider.propTypes = {
    children: PropTypes.node,
};
export default UtilsProvider;
