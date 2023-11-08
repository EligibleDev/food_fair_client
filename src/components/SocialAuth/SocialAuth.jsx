import { Button } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios/useAxios";

const SocialAuth = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const axios = useAxios();

    const handleSocialLogin = (media) => {
        media()
            .then((res) => {
                mutate(res?.user);
                console.log(res);
                toast.success("Google login successful");
                navigate("/");
            })
            .catch((error) => console.error(error));
    };
    const { mutate } = useMutation({
        mutationKey: ["user"],
        mutationFn: (user) => {
            console.log(user);
            return axios.post("/users", user);
        },
        onSuccess: () => {
            console.log("Account successfully sent to database");
        },
        onError: (error) => {
            toast.error(error.message);
            console.error(error);
        },
    });

    return (
        <Button
            onClick={() => handleSocialLogin(googleLogin)}
            size="lg"
            variant="outlined"
            color="yellow"
            className="flex border-yellow justify-center items-center gap-3 w-full"
        >
            <img src="/google.png" alt="metamask" className="h-6 w-6" />
            Continue with Google
        </Button>
    );
};

export default SocialAuth;
