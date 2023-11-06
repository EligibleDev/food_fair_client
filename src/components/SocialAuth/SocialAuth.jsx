import { Button } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth/useAuth";

const SocialAuth = () => {
    const { googleLogin } = useAuth();

    return (
        <Button
            onClick={googleLogin}
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
