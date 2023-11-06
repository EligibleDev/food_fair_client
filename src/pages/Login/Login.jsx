import { Checkbox, Input, Typography } from "@material-tailwind/react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import SocialAuth from "../../components/SocialAuth/SocialAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios/useAxios";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const axios = useAxios();
    const { login } = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const toastId = toast.loading("Logging in...");

        try {
            const user = await login(email, password);
            const data = await axios.post("/auth/access_token", {
                email: user.user.email,
            });
            console.log(data);

            toast.success("Login successful", { id: toastId });
            navigate(location?.state ? location.state : "/");
        } catch (error) {
            console.error(error);
            toast.error(error.message, { id: toastId });
        }

        // login(email, password)
        //     .then((res) => {
        //         console.log(res.user.email);
        //         axios.post("/auth/access_token", { email: res.user.email });
        //         toast.success("Login successful", { id: toastId });
        //         navigate(location?.state ? location.state : "/");
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         toast.error(error.message, { id: toastId });
        //     });
    };

    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="w-full max-w-sm p-4 bg-[rgba(4,25,29,.5)] border-2 border-yellow rounded-lg sm:p-6 md:p-8 text-[var(--white)]">
                <form onSubmit={handleLogin} className="space-y-6">
                    <h5 className="font-title text-4xl">Login</h5>
                    <Input
                        type="email"
                        required
                        color="white"
                        variant="standard"
                        label="Your Email"
                        name="email"
                    />

                    <Input
                        type="password"
                        required
                        color="white"
                        variant="standard"
                        label="Your Password"
                        name="password"
                    />
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="yellow"
                                className="flex items-center font-normal text-[var(--white)]"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-yellow"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                        required
                    />

                    <PrimaryButton type="submit" text="login" />
                    <div className="text-sm font-medium ">
                        Not registered?{" "}
                        <Link to="/register" className="text-yellow">
                            Create account
                        </Link>
                    </div>
                </form>

                <div className="mt-6 pt-7 border-t-[4px] border-dotted border-t-[#6254549c]">
                    <SocialAuth />
                </div>
            </div>
        </div>
    );
};

export default Login;
