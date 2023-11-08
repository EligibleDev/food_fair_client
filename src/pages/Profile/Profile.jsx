import { Link, NavLink, Outlet } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Profile = () => {
    return (
        <>
            <div className="h-screen p-4 gap-4 flex justify-between items-start">
                <aside className="h-[calc(100vh-2rem)] w-[25vw] rounded flex flex-col gap-6 p-4 justify-start bg-[rgba(4,25,29,.5)] border-2 border-yellow">
                    <Link to="/">
                        <img className="w-2/3 mx-auto" src="/logo-light.png" alt="" />
                    </Link>
                    <NavLink
                        to="/profile/"
                        className={({ isActive }) =>
                            isActive ? "border-2 border-yellow p-2 rounded" : ""
                        }
                    >
                        <PrimaryButton extraCls="w-full" text="my added products" />
                    </NavLink>
                    <NavLink
                        to="/profile/my_ordered_foods"
                        className={({ isActive }) =>
                            isActive ? "border-2 border-yellow p-2 rounded" : ""
                        }
                    >
                        <PrimaryButton extraCls="w-full" text="my ordered products" />
                    </NavLink>
                    <NavLink
                        to="/profile/add_food"
                        className={({ isActive }) =>
                            isActive ? "border-2 border-yellow p-2 rounded" : ""
                        }
                    >
                        <PrimaryButton extraCls="w-full" text="add a product" />
                    </NavLink>

                    <div className="border-b-4 border-dotted border-t-[#6254549c]"></div>
                    <PrimaryButton link="/" extraCls="w-full" text="home" />
                    <PrimaryButton link="/foods" extraCls="w-full" text="all foods" />
                    <PrimaryButton link="/blog" extraCls="w-full" text="blog" />
                </aside>

                <div className="w-[75vw] bg-[rgba(4,25,29,.5)] border-2 rounded border-yellow h-[calc(100vh-2rem)]">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Profile;
