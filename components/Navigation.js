import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
    return (
        <>
            <div style={{ background: "#00A9E4" }} className="navbar ">
                <div className="navbar-start sm:ml-10 ml-0">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>

                        <div
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <Link
                                href="/"
                                className="text-sm font-bold my-1 bg-sky-200 focus:bg-sky-500 btn btn-ghost focus:text-white"
                            >
                                Home
                            </Link>

                            <li tabIndex={0}>
                                <Link
                                    href="/"
                                    className="text-sm font-bold mb-1 bg-sky-200 focus:bg-sky-500 focus:text-white btn btn-ghost"
                                >
                                    Products
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </Link>
                                <ul className="p-2">
                                    <li>
                                        <a>Laptop</a>
                                    </li>
                                    <li>
                                        <a>Foods</a>
                                    </li>
                                </ul>
                            </li>

                            <Link
                                href="/"
                                className="text-sm font-bold mb-1 bg-sky-200 focus:bg-sky-500  focus:text-white btn btn-ghost"
                            >
                                AboutUs
                            </Link>

                            <Link
                                href="/"
                                className="text-sm font-bold mb-1 bg-sky-200 focus:bg-sky-500 focus:text-white btn btn-ghost"
                            >
                                ContactUs
                            </Link>
                        </div>
                    </div>
                    <Link href="/" className="btn btn-ghost normal-case text-xl text-white">
                        Galib E Shop
                    </Link>

                    <div className=" w-72 hidden lg:flex ml-10">
                        <input
                            type="text"
                            placeholder="Search here"
                            className="input w-full border border-white focus:bg-gray-50  bg-sky-400 relative"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ left: "500px" }}
                            className="h-5 w-5 absolute top-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="navbar-end sm:mr-10 mr:0">
                    <div className="hidden lg:flex  justify-evenly">
                        <ul className="menu menu-horizontal ">
                            <Link href="/" className="text-sm font-bold text-white btn btn-ghost">
                                Home
                            </Link>

                            <li tabIndex={0}>
                                <Link
                                    href="/"
                                    className="text-sm font-bold text-white btn btn-ghost"
                                >
                                    Products
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </Link>
                                <ul className="p-2 ">
                                    <li>
                                        <a>Laptop</a>
                                    </li>
                                    <li>
                                        <a>Foods</a>
                                    </li>
                                </ul>
                            </li>
                            <Link href="/" className="text-sm font-bold text-white btn btn-ghost">
                                AboutUs
                            </Link>

                            <Link href="/" className="text-sm font-bold text-white btn btn-ghost">
                                ContactUs
                            </Link>
                        </ul>
                    </div>

                    <div className="flex">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className=" bg-red-500 rounded-full pt-1 w-5 h-5 text-white indicator-item">
                                        8
                                    </span>
                                </div>
                            </label>
                            <div
                                tabIndex={0}
                                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                            >
                                <div className="card-body">
                                    <span className="font-bold text-lg bg-sky-200 p-3 rounded-lg">
                                        8 Items
                                    </span>
                                    <span className="text-black">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button
                                            style={{ background: "#00A9E4" }}
                                            className="btn btn-block border-none"
                                        >
                                            View cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <a className="">SignIn</a> */}

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                {/* <div className="w-10 rounded-full">
                                    <Image src="https://i.ibb.co/W2h0pRN/people.jpg" width="40" height="40" alt="" />
                                </div> */}
                                
                                <div className="w-10 rounded-full">
                                    <Image src="https://placeimg.com/80/80/people" width="40" height="40" alt="" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <Link
                                    href="/"
                                    className="text-sm justify-between font-bold p-2 my-1 rounded bg-sky-100 focus:bg-sky-400 focus:text-white"
                                >
                                Profile
                                </Link>

                                <Link
                                    href="/"
                                    className="text-sm justify-between font-bold p-2 rounded bg-sky-100 focus:bg-sky-400 focus:text-white"
                                >
                                Settings
                                </Link>

                                <Link
                                    href="/"
                                    className="text-sm justify-between font-bold p-2 my-1 rounded bg-sky-100 focus:bg-sky-400 focus:text-white"
                                >
                                Logout
                                </Link>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
