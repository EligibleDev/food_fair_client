import { Avatar, Button } from "@material-tailwind/react";
import { FiLogOut } from "react-icons/fi";
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai";
import React, { useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth/useAuth";

const ProfileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    const profileMenuItems = [
        {
            label: user?.displayName,
            icon: AiOutlineUser,
            do: () => {
                setIsMenuOpen(false);
            },
        },
        {
            label: "Sign Out",
            icon: FiLogOut,
            do: () => {
                logout();
                setIsMenuOpen(false);
                return toast.success("Sign out successful");
            },
        },
    ];

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-yellow p-0.5"
                        src={user?.photoURL}
                    />
                    <AiFillCaretDown
                        strokeWidth={2.5}
                        className={`h-3 w-3 text-yellow transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1 bg-white">
                {profileMenuItems?.map((item, key) => {
                    const isLastItem = key === profileMenuItems?.length - 1;
                    return (
                        <MenuItem
                            key={item?.label}
                            onClick={item?.do}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            {React?.createElement(item?.icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className={isLastItem ? "font-bold" : "font-normal"}
                                color={isLastItem ? "red" : "green"}
                            >
                                {item?.label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default ProfileMenu;
