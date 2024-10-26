import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ isDrawerOpen, closeDrawer }) {
    // State for managing dropdowns
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    // Handlers to toggle dropdowns
    const togglePages = () => setIsPagesOpen(!isPagesOpen);
    const toggleSales = () => setIsSalesOpen(!isSalesOpen);
    const toggleAuth = () => setIsAuthOpen(!isAuthOpen);

    return (
        <aside
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                } bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
            aria-label="Sidenav"
            id="drawer-navigation"
        >
            <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
                {/* Close Button (visible on small screens) */}
                <div className="flex justify-end md:hidden">
                    <button
                        onClick={closeDrawer}
                        className="p-2 text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700"
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Search Form */}
                <form action="#" method="GET" className="md:hidden mb-2">
                    <label htmlFor="sidebar-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="search"
                            id="sidebar-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Search"
                        />
                    </div>
                </form>

                {/* Main Navigation */}
                <ul className="space-y-2">
                    {/* Overview */}
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0z"></path>
                                <path d="M12.395 2.553a1 1 0 011.45-.385c.345.23.614.558.822.88.214.33.403.713.57 1.116.334.804.614 1.768.84 2.734.2 1.176.35 2.283.473 3.298.055.499.098.98.128 1.443.05.967-.334 1.83-1.106 2.548a2.64 2.64 0 01-1.067.945c-.68.328-1.534.398-2.654.398a1 1 0 00-.879 2.121A31.365 31.365 0 0013 13a2.99 2.99 0 00-2.121.879 2.99 2.99 0 00-.879-2.121A5.973 5.973 0 004.75 12.094 5.973 5.973 0 004 15v3H1v-3a3 3 0 013-2.906c.488.02.966.066 1.434.136 1.015.123 2.122.273 3.298.473a31.365 31.365 0 003.298-.84c.403-.167.786-.356 1.116-.57a1 1 0 011.414 1.414c-.242.242-.487.442-.734.605a30.193 30.193 0 01-3.021.868c-.428.116-.872.21-1.324.27a1 1 0 01-.872-1.746c.38-.065.765-.163 1.152-.291a28.905 28.905 0 003.061-.73c1.212-.31 2.346-.74 3.388-1.28a31.225 31.225 0 001.744-1.064 1 1 0 00-.385-1.45z"></path>
                            </svg>
                            <span className="ml-3">Overview</span>
                        </a>
                    </li>

                    {/* Pages Dropdown */}
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="dropdown-pages"
                            aria-expanded={isPagesOpen}
                            onClick={togglePages}
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 012-2h1a1 1 0 010 2H6v7h2l1 2h4l1-2h2V4h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Projects</span>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {isPagesOpen && (
                            <ul
                                id="dropdown-pages"
                                className="py-2 space-y-2"
                            >
                                <li>
                                    <NavLink
                                        to="/enrolled-projects"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Enrolled Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Kanban
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Sales Dropdown */}
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="dropdown-sales"
                            aria-expanded={isSalesOpen}
                            onClick={toggleSales}
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 3a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V5a2 2 0 00-2-2H5z"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    d="M5 5h10v7H5V5z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {isSalesOpen && (
                            <ul
                                id="dropdown-sales"
                                className="py-2 space-y-2"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Billing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Invoice
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Messages */}
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                                ></path>
                                <path
                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                                ></path>
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                4
                            </span>
                        </a>
                    </li>

                    {/* Authentication Dropdown */}
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="dropdown-authentication"
                            aria-expanded={isAuthOpen}
                            onClick={toggleAuth}
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm5 0a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414L12 8.586l4.293-4.293a1 1 0 011.414 1.414L13.414 10l4.293 4.293a1 1 0 01-1.414 1.414L12 11.414l-4.293 4.293a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {isAuthOpen && (
                            <ul
                                id="dropdown-authentication"
                                className="py-2 space-y-2"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Forgot Password
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Additional Links */}
                <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    {/* Docs */}
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="ml-3">Docs</span>
                        </a>
                    </li>

                    {/* Help */}
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                    clipRule="evenodd"
                                ></path>
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>
                            <span className="ml-3">Help</span>
                        </a>
                    </li>
                </ul>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 flex justify-center p-4 space-x-4 w-full lg:hidden bg-white dark:bg-gray-800 z-20">
                    {/* Dashboard Icon */}
                    <a
                        href="#"
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 4a1 1 0 000 2h2a1 1 0 100-2H5z"
                            ></path>
                            <path
                                fillRule="evenodd"
                                d="M3 8a1 1 0 000 2h2a1 1 0 100-2H3zm0 4a1 1 0 000 2h2a1 1 0 100-2H3zm0 4a1 1 0 000 2h2a1 1 0 100-2H3z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>

                    {/* Settings Icon */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            // Implement any additional functionality if needed
                        }}
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
                        aria-label="Settings"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 3900 3900"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                            <path
                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                stroke="#fff"
                                strokeWidth="300"
                            />
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                            <g fill="#fff">
                                {/* Stars */}
                                {/* Add stars as needed */}
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
