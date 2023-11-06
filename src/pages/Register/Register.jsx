import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input, Checkbox, Typography } from "@material-tailwind/react";
import SocialAuth from "../../components/SocialAuth/SocialAuth";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import useUtils from "../../hooks/useUtils/useUtils";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { createUser, updateUser } = useAuth();
    const { serverURL } = useUtils();

    const handleRegister = (event) => {
        event.preventDefault();

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

        console.log(serverURL);

        const toastId = toast.loading("Creating user...");

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                fetch("https://assignment-10-server-ivory-one.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            console.log(data);
                            updateUser(name, photo);
                            toast.success("Account created successfully");
                            navigate(location?.state ? location.state : "/");
                        }
                    })
                    .catch((error) => console.error(error));
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });

        createUser(email, password)
            .then((res) => {
                updateUser(name, photo);
                toast.success("Account created successfully", { id: toastId });
                navigate(location?.state ? location.state : "/");
                console.log(location);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message, { id: toastId });
            });
    };

    return (
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
    );
};

export default Register;
