import { useContext } from "react";
import { UtilsContext } from "../../providers/UtilsProvider/UtilsProvider";

const useUtils = () => {
    const all = useContext(UtilsContext);
    return all;
};

export default useUtils;
