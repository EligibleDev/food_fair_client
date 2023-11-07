import axios from "axios";
import useAuth from "../useAuth/useAuth";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    withCredentials: true,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});

const useAxios = () => {
    const { logout } = useAuth();

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            // console.error("AXIOS ERROR => ", error);
            if (error.response.status === 401 || error.response.status === 403) {
                logout();
            }
        }
    );

    return instance;
};

export default useAxios;
