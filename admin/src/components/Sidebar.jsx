import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoHomeOutline, IoKey } from "react-icons/io5";
import { BsListNested } from "react-icons/bs";
import { FaPersonHalfDress } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { PiGitBranchLight } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationSlider from './NavigationSlider';






const Sidebar = () => {
    const location = useLocation()

    console.log(location.pathname)

    const menuItems = [
        { path: "/dashboard", icon: <IoHomeOutline />, label: "Dashboard" },
        { path: "/users", icon: <HiUsers />, label: "Users" },
        { path: "/orders", icon: <BsListNested />, label: "Orders" },
        { path: "/analytics", icon: <SiSimpleanalytics />, label: "Analytics" },
        { path: "/branches", icon: <PiGitBranchLight />, label: "Branches" },
        { path: "/categories", icon: <BiSolidCategoryAlt />, label: "Categories" },
        { path: "/products", icon: <RiShoppingBasket2Fill />, label: "Products" },
        { path: "/tasks", icon: <MdOutlineTaskAlt />, label: "Tasks" },
        { path: "/workers", icon: <FaPersonHalfDress />, label: "Workers" },
        { path: "/customers", icon: <BsFillPersonLinesFill />, label: "Customers" },
        { path: "/settings", icon: <IoSettingsSharp />, label: "Settings" },
    ];
    
    const navigations = [
        {
            text: "Please organize your menus through button bellow!",
            buttonText: "Add Menus",
            img: "https://cdn-icons-png.flaticon.com/128/745/745449.png",
            href: "/dashboard"
        },
        {
            text: "Please organize your workers through button bellow!",
            buttonText: "Add Workers",
            img: "https://cdn-icons-png.flaticon.com/512/5733/5733579.png",
            href: "/workers"
        }
    ]
    return (
        <div className=" w-2/12 fixed top-0 left-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {/* <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div> */}
            <div className="w-full flex flex-col h-screen">
                <div className='flex w-full flex-col justify-center text-center h-[20%] items-center'>
                    <Link to={"/dashboard"}>
                        <img src="./logo.png" className='size-24' alt="" />
                    </Link>
                    <p className='text-primary text-sm'>Restaurant Dashboard</p>
                </div>
                <ul className="overflow-y-auto text-base-content mt-5 max-h-[50%] rounded-[40px] gap-1 relative flex flex-col w-full h-auto flex-grow transition-all py-6 px-7">
                    {menuItems.map((item, index) => (
                        <li className={`flex ${location.pathname === item.path ? "border-primary text-primary bg-neutral rounded-xl font-bold transition-all" : ""} relative`} key={index}>
                            {location.pathname === item.path ? <div className='w-1 h-full absolute top-0 -left-5 rounded-xl bg-primary'></div> : ""}
                            <Link className={`text-sm flex gap-5 items-center py-2 hover:bg-neutral  flex-1 px-2 rounded-xl`} to={item.path}>
                                {item.icon} {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex-1 mt-5 p-5'>
                    <NavigationSlider data={navigations} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
