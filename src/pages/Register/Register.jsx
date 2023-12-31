import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input, Checkbox, Typography } from "@material-tailwind/react";
import SocialAuth from "../../components/SocialAuth/SocialAuth";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios/useAxios";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { createUser, updateUser, logout } = useAuth();
    const axios = useAxios();

    const { mutate } = useMutation({
        mutationKey: ["user"],
        mutationFn: (user) => {
            console.log(user);
            return axios.post("/users", user);
        },
        onSuccess: () => {
            console.log("Account created successfully");
        },
        onError: (error) => {
            toast.error(error.message);
            console.error(error);
        },
    });

    const handleRegister = async (event) => {
        event.preventDefault();

        const toastId = toast.loading("Creating user...");

        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            return toast.error("Password has to be at least 6 characters");
        } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?])/.test(password)) {
            return toast.error(
                "Password has to include at least 1 capital letter and 1 special character"
            );
        }

        try {
            const userCredential = await createUser(email, password);

            if (userCredential.user) {
                const accessToken = userCredential.user.accessToken;

                const response = await axios.post("/auth/access_token", {
                    email: userCredential.user.email,
                    accessToken: accessToken,
                });

                if (response.data?.success) {
                    updateUser(name, photo);
                    mutate(userCredential.user);

                    toast.success("Registration and Login Successful", { id: toastId });
                    navigate(location?.state ? location.state : "/");
                } else {
                    logout();
                    const logoutResponse = await axios.post("/auth/logout");
                    console.log(logoutResponse.data);
                }
            } else {
                // Handle the case where the user account creation failed
                toast.error("User account creation failed");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message, { id: toastId });
        }
    };

    return (
        <>
            <Helmet>
                <title>Register | Food Fair</title>
            </Helmet>
            <div className="w-full min-h-screen flex justify-center items-center ">
                <div className="w-full max-w-sm p-4 bg-[rgba(4,25,29,.5)] border-2 border-yellow rounded-lg sm:p-6 md:p-8 text-[var(--white)]">
                    <form onSubmit={handleRegister} className="space-y-6">
                        <h5 className="font-title text-4xl">Register</h5>

                        <Input
                            type="text"
                            required
                            color="white"
                            variant="standard"
                            label="Your Name"
                            name="name"
                        />

                        <Input
                            type="email"
                            required
                            color="white"
                            variant="standard"
                            label="Your Email"
                            name="email"
                        />

                        <Input
                            type="url"
                            required
                            color="white"
                            variant="standard"
                            label="Photo URL"
                            name="photo"
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

                        <PrimaryButton type="submit" text="register" />
                        <div className="text-sm font-medium ">
                            Already have an account?{" "}
                            <Link to="/login" className="text-yellow">
                                Login here
                            </Link>
                        </div>
                    </form>

                    <div className="mt-6 pt-7 border-t-[4px] border-dotted border-t-[#6254549c]">
                        <SocialAuth />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
