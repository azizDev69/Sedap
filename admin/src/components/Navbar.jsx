import React, { useState } from 'react'
import { FaRegBell } from "react-icons/fa6";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import ContainerTemplate from './Container';
import { useDispatch } from 'react-redux';
import { IoSearch } from "react-icons/io5";
import { logout } from '../redux/reducers/authSlice';

import { toast } from 'react-toastify';





const Navbar = () => {

    const dispatch = useDispatch('')

    const logoutHandler = () => {
        dispatch(logout())
        toast.success('Logged out successfully.')
    }
    return (
        <ContainerTemplate>
            <div className="navbar">
                <div className="flex-1 pr-5 ">
                    <label className="input w-full border-none  shadow-xl">
                        <input type="search here" placeholder="Search Here" />
                        <IoSearch  className='text-xl'/>
                    </label>
                </div>
                <div className="flex gap-2">
                    <div className='flex gap-4 items-center'>
                        <details className='dropdown'>
                            <summary className="text-lg btn bg-info  rounded-xl">< FaRegBell /></summary>
                            <ul className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-base-100 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        New order
                                        <span className="badge bg-primary">New</span>
                                    </a>
                                </li>
                                <li><a>Payment received</a></li>
                                <li><a>Message received</a></li>
                            </ul>
                        </details>
                        <button className='text-lg btn bg-info rounded-xl'><LuMessageSquareMore /></button>
                        <button className='text-lg btn rounded-xl bg-base-100'><GoGift /></button>
                        <button className='text-lg btn rounded-xl bg-error'><IoSettingsOutline /></button>
                        <div className='text-2xl rounded-xl text-center'><LiaGripLinesVerticalSolid /></div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={() => logoutHandler()}><a >Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </ContainerTemplate>
    )
}

{/* < FaRegBell /> */ }

export default Navbar