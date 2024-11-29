// src/components/Instructor/Courses/CoursesList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CoursesList() {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState('');

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

    const handleDeleteCourse = (courseId) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            axios.put(`http://localhost:8000/course/delete/${courseId}`, {}, { withCredentials: true })
                .then((response) => {
                    if (response.status === 200) {
                        setCourses((prevCourses) => prevCourses.filter(course => course.course_id !== courseId));
                        toast.success('Course deleted successfully!', {
                            position: "top-right",
                            autoClose: 3000,
                        });
                    }
                })
                .catch((error) => {
                    console.error('There was an error deleting the course!', error);
                    toast.error('Failed to delete course.', {
                        position: "top-right",
                        autoClose: 5000,
                    });
                });
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
                                        <NavLink to={`/Instructor/Courses/Edit`} className="text-blue-600 dark:text-blue-500 hover:underline text-sm sm:text-base">
                                            Edit
                                        </NavLink>
                                        <button
                                            className="text-red-600 dark:text-red-500 hover:underline text-sm sm:text-base"
                                            onClick={() => handleDeleteCourse(course.course_id)}
                                        >
                                            Delete
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
