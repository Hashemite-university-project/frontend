// src/components/Instructor/Courses/CoursesList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CoursesList() {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState('');
    const [togglingCourseId, setTogglingCourseId] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, [search]);

    const fetchCourses = () => {
        axios.get(`http://localhost:8000/course/instructorCourses?course_name=${search}`, { withCredentials: true })
            .then((response) => {
                if (response.status === 200) {
                    setCourses(response.data);
                }
            })
            .catch((error) => {
                console.error('There was an error fetching the courses!', error);
                toast.error('Failed to fetch courses.', {
                    position: "top-right",
                    autoClose: 5000,
                });
            });
    };
    const togglePublishStatus = async (courseID) => {
        setTogglingCourseId(courseID);
        try {
            const response = await axios.put(
                `http://localhost:8000/course/activateCourse/${courseID}`,
                {}, // Request body (empty object here)
                { withCredentials: true } // Config
            );

            toast.success(response.data);

            // Update the local state to reflect the change
            setCourses((prevCourses) =>
                prevCourses.map((course) =>
                    course.course_id === courseID
                        ? { ...course, is_deleted: !course.is_deleted }
                        : course
                )
            );
        } catch (error) {
            console.error('Error toggling publish status:', error);
            toast.error('Failed to toggle publish status. Please try again.');
        } finally {
            setTogglingCourseId(null);
        }
    };




    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <ToastContainer />
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                {/* Search Input */}
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                    <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Search courses..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Add Course Button */}
                <NavLink to='/instructor/create/course' className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Add Course
                </NavLink>
            </div>

            {/* Courses Table */}
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Thumbnail
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {courses.length > 0 ? (
                            courses.map((course) => (
                                <tr key={course.course_id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {/* Thumbnail */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img
                                            src={course.course_img}
                                            alt={course.course_name}
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
                                        />
                                    </td>

                                    {/* Course Name */}
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-sm sm:text-base">
                                        {course.course_name}
                                    </th>

                                    {/* Category (hidden on screens smaller than sm) */}
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-300 hidden sm:table-cell text-sm sm:text-base">
                                        {course.category.category_name}
                                    </td>

                                    {/* Price (hidden on screens smaller than md) */}
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-300 hidden md:table-cell text-sm sm:text-base">
                                        ${course.price}
                                    </td>

                                    {/* Action */}
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <NavLink to={`/instructor/edit/course/${course.course_id}`} className="text-blue-600 dark:text-blue-500 hover:underline text-sm sm:text-base">
                                            Edit
                                        </NavLink>

                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => togglePublishStatus(course.course_id)}
                                            className={`px-4 py-2 rounded ${course.is_deleted
                                                    ? 'bg-green-500 hover:bg-green-600 text-white'
                                                    : 'bg-red-500 hover:bg-red-600 text-white'
                                                } transition duration-200`}
                                            disabled={togglingCourseId === course.course_id}
                                        >
                                            {togglingCourseId === course.course_id ? (
                                                <svg
                                                    className="animate-spin h-5 w-5 mx-auto"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8v8H4z"
                                                    ></path>
                                                </svg>
                                            ) : course.is_deleted ? (
                                                'Publish'
                                            ) : (
                                                'Unpublish'
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">
                                    No courses found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CoursesList;
