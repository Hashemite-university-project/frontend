// Header.jsx
import React, { useState, useEffect, useRef } from 'react';

function Header({ toggleDrawer }) {
    // State for managing dropdowns
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Refs for detecting clicks outside the dropdowns
    const notificationRef = useRef(null);
    const appsDropdownRef = useRef(null);
    const userMenuRef = useRef(null);

    // Handlers to toggle dropdowns
    const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
    const toggleAppsDropdown = () => setIsAppsDropdownOpen(!isAppsDropdownOpen);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setIsNotificationOpen(false);
            }
            if (
                appsDropdownRef.current &&
                !appsDropdownRef.current.contains(event.target)
            ) {
                setIsAppsDropdownOpen(false);
            }
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target)
            ) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav
            className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
            aria-label="Main Navigation"
        >
            <div className="flex justify-between items-center">
                {/* Left Section */}
                <div className="flex items-center">
                    {/* Drawer Toggle Button */}
                    <button
                        onClick={toggleDrawer}
                        aria-controls="drawer-navigation"
                        aria-expanded="false"
                        className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 dark:focus:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Toggle sidebar</span>
                    </button>

                    {/* Logo */}
                    <a href="https://flowbite.com" className="flex items-center">
                        <img
                            src="https://flowbite.s3.amazonaws.com/logo.svg"
                            className="mr-3 h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span>
                    </a>
                </div>

                {/* Search Form (visible on medium screens and above) */}
                <form action="#" method="GET" className="hidden md:flex md:pl-2">
                    <label htmlFor="topbar-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-64">
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
                            id="topbar-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Search"
                        />
                    </div>
                </form>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Notifications Button */}
                    <div className="relative" ref={notificationRef}>
                        <button
                            type="button"
                            onClick={toggleNotification}
                            aria-haspopup="true"
                            aria-expanded={isNotificationOpen}
                            className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">View notifications</span>
                            {/* Bell Icon */}
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                            </svg>
                        </button>

                        {/* Notification Dropdown */}
                        {isNotificationOpen && (
                            <div
                                className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg dark:bg-gray-700 z-50"
                            >
                                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                                    Notifications
                                </div>
                                <div className="divide-y divide-gray-100 dark:divide-gray-600">
                                    {/* Notification Item 1 */}
                                    <a
                                        href="#"
                                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex-shrink-0 relative">
                                            <img
                                                className="w-11 h-11 rounded-full"
                                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                                alt="Bonnie Green avatar"
                                            />
                                            <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-3 h-3 text-white"
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
                                            </div>
                                        </div>
                                        <div className="pl-3 w-full">
                                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                                New message from
                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                    Bonnie Green
                                                </span>
                                                : "Hey, what's up? All set for the presentation?"
                                            </div>
                                            <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                                                a few moments ago
                                            </div>
                                        </div>
                                    </a>

                                    {/* Notification Item 2 */}
                                    <a
                                        href="#"
                                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex-shrink-0 relative">
                                            <img
                                                className="w-11 h-11 rounded-full"
                                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                                alt="Jese Leos avatar"
                                            />
                                            <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-3 h-3 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="pl-3 w-full">
                                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                    Jese leos
                                                </span>
                                                and
                                                <span className="font-medium text-gray-900 dark:text-white">
                                                    5 others
                                                </span>
                                                started following you.
                                            </div>
                                            <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                                                10 minutes ago
                                            </div>
                                        </div>
                                    </a>

                                    {/* More Notification Items... */}
                                    {/* Add additional notification items as needed */}
                                </div>
                                <a
                                    href="#"
                                    className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
                                >
                                    <div className="inline-flex items-center">
                                        {/* Search Icon */}
                                        <svg
                                            aria-hidden="true"
                                            className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        View all
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Apps Dropdown */}
                    <div className="relative" ref={appsDropdownRef}>
                        <button
                            type="button"
                            onClick={toggleAppsDropdown}
                            aria-haspopup="true"
                            aria-expanded={isAppsDropdownOpen}
                            className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">View apps</span>
                            {/* Apps Icon */}
                            <svg
                                className="w-6 h-6"
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
                        </button>

                        {/* Apps Dropdown Menu */}
                        {isAppsDropdownOpen && (
                            <div
                                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg dark:bg-gray-700 z-50"
                            >
                                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                                    Apps
                                </div>
                                <div className="grid grid-cols-3 gap-4 p-4">
                                    {/* App 1 */}
                                    <a
                                        href="#"
                                        className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <div className="text-sm text-gray-900 dark:text-white">Sales</div>
                                    </a>

                                    {/* App 2 */}
                                    <a
                                        href="#"
                                        className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013-2.906z"
                                            ></path>
                                        </svg>
                                        <div className="text-sm text-gray-900 dark:text-white">Users</div>
                                    </a>

                                    {/* App 3 */}
                                    <a
                                        href="#"
                                        className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5 3a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V5a2 2 0 00-2-2H5z"
                                                clipRule="evenodd"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                d="M5 5h10v7H5V5z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <div className="text-sm text-gray-900 dark:text-white">Inbox</div>
                                    </a>

                                    {/* App 4 */}
                                    <a
                                        href="#"
                                        className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                            ></path>
                                        </svg>
                                        <div className="text-sm text-gray-900 dark:text-white">Logout</div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Menu */}
                    <div className="relative" ref={userMenuRef}>
                        <button
                            type="button"
                            onClick={toggleUserMenu}
                            aria-haspopup="true"
                            aria-expanded={isUserMenuOpen}
                            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                                alt="User avatar"
                            />
                        </button>

                        {/* User Dropdown Menu */}
                        {isUserMenuOpen && (
                            <div
                                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg dark:bg-gray-700 z-50"
                            >
                                <div className="py-3 px-4">
                                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                        Neil Sims
                                    </span>
                                    <span className="block text-sm text-gray-900 truncate dark:text-white">
                                        name@flowbite.com
                                    </span>
                                </div>
                                <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="user-menu-button">
                                    {/* Profile Link */}
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            My profile
                                        </a>
                                    </li>
                                    {/* Account Settings Link */}
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Account settings
                                        </a>
                                    </li>
                                </ul>
                                <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="user-menu-button">
                                    {/* Sign Out Link */}
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
