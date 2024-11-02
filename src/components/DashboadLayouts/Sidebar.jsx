import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaProjectDiagram, FaTasks, FaCalendarAlt, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

function Sidebar({ isDrawerOpen, closeDrawer }) {
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

                {/* Main Navigation */}
                <ul className="space-y-2">
                    {/* Dashboard */}
                    <li>
                        <NavLink
                            to="/dashboard"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaTachometerAlt className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="ml-3">Dashboard</span>
                        </NavLink>
                    </li>

                    {/* Projects */}
                    <li>
                        <NavLink
                            to="/enrolled-projects"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaProjectDiagram className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="ml-3">Projects</span>
                        </NavLink>
                    </li>

                    {/* Kanban */}
                    <li>
                        <NavLink
                            to="/kanban"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaTasks className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="ml-3">Kanban</span>
                        </NavLink>
                    </li>

                    {/* Calendar */}
                    <li>
                        <NavLink
                            to="/calendar"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaCalendarAlt className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="ml-3">Calendar</span>
                        </NavLink>
                    </li>

                    {/* Enrolled Courses */}
                    <li>
                        <NavLink
                            to="/inrolled-courses"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaBook className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="ml-3">Enrolled Courses</span>
                        </NavLink>
                    </li>

                    {/* Available Courses */}
                    <li>
                        <NavLink
                            to="/available-courses"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaChalkboardTeacher className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="ml-3">Available Courses</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;