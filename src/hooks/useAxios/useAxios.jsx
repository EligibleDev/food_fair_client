import axios from "axios";
import useAuth from "../useAuth/useAuth";

const instance = axios.create({
    baseURL: "https://assignment-11-server-ten-lyart.vercel.app/api/v1",
    // baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
    headers: { "X-Custom-Header": "foobar" },
});

const useAxios = () => {
    const { logout } = useAuth();

    let isLoggingOut = false;

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                if (!isLoggingOut) {
                    isLoggingOut = true;
                    logout();
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default useAxios;
