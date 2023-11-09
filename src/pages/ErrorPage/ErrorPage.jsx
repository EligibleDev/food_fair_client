import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <h1 className="text-[220px] text-yellow font-medium leading-[150px]">404</h1>
            <h3 className="pb-6">Page not found</h3>
            <PrimaryButton text="go to homepage" link="/" />
        </div>
    );
};

export default ErrorPage;
