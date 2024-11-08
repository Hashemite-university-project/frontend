// src/pages/Student/Courses/CourseDetailsMain.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Faq from '../../../components/Faq';
import 'react-tabs/style/react-tabs.css';

// StarRating Component for reusability
const StarRating = ({ rating = 0 }) => {
    // Ensure rating is a valid number between 0 and 5
    const validRating = Math.min(Math.max(Math.floor(Number(rating)), 0), 5);

    const fullStars = validRating;
    const emptyStars = 5 - fullStars;

    return (
        <div className="flex">
            {[...Array(fullStars)].map((_, index) => (
                <svg key={`full-${index}`} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.368 2.45a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.45a1 1 0 00-1.175 0l-3.368 2.45c-.784.57-1.838-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.86 9.385c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.958z" />
                </svg>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <svg key={`empty-${index}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.368 2.45a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.45a1 1 0 00-1.175 0l-3.368-2.45c-.784.57-1.838-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.86 9.385c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.958z" />
                </svg>
            ))}
        </div>
    );
};


const CourseDetailsMain = ({
    courseID,
    courseImg,
    courseTitle,
    courseName,
    courseAuthor,
    courseAuthorImg,
    courseLesson,
    courseDuration,
    courseEnrolled,
    coursePrice,
    courseRegularPrice,
    courseLanguage,
    allCourses
}) => {

    const handleStartNowClick = () => {
        console.log("Start Now clicked for course ID:", courseID);
    };

    const relatedCourses = allCourses.filter(course => course.id !== courseID).slice(0, 2);

    return (
        <div className="flex flex-col lg:flex-row mt-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3 lg:pr-8">
                {/* Course Video */}
                <div className="mb-8">
                    <div className="relative pb-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/e5Hc2B50Z7c"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs>
                    <TabList className="flex space-x-4 border-b border-gray-300">
                        <Tab className="py-2 px-4 focus:outline-none">Description</Tab>
                        <Tab className="py-2 px-4 focus:outline-none">Curriculum</Tab>
                        <Tab className="py-2 px-4 focus:outline-none">Reviews</Tab>
                        <Tab className="py-2 px-4 focus:outline-none">FAQ</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2">About This Course</h3>
                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                            </p>
                            <img src={courseImg} alt={courseTitle} className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2">Course Curriculum</h3>
                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum...
                            </p>
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold mb-2">Week 1: Introduction</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Understanding the Basics</li>
                                    <li>Setting Up Your Environment</li>
                                    <li>First Project: Getting Started</li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold mb-6">Reviews</h3>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
                                {/* Overall Rating Display */}
                                <div className="flex items-center mb-6 lg:mb-0 lg:mr-10">
                                    <span className="text-5xl font-bold text-yellow-500 mr-4">{coursePrice}</span>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-6 h-6 ${index < Math.round(coursePrice) ? "text-yellow-500" : "text-gray-300"}`}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.3l-6.3 4.2 1.6-7.1-5.4-5.1 7.3-.6L12 2.5l3.2 6.7 7.3.6-5.4 5.1 1.6 7.1z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                {/* Star Rating Breakdown */}
                                <div className="w-full lg:w-2/3">
                                    <div className="space-y-3">
                                        {[5, 4, 3, 2, 1].map((star) => (
                                            <div key={star} className="flex items-center">
                                                <span className="w-12 font-semibold">{star} stars</span>
                                                <div className="relative flex-1 h-3 bg-gray-200 rounded-full mr-3">
                                                    <div
                                                        className="absolute top-0 left-0 h-3 bg-yellow-500 rounded-full"
                                                        style={{ width: `${(star / 5) * 100}%` }}
                                                    ></div>
                                                </div>
                                                <span className="w-8 text-gray-600">{Math.floor((star / 5) * 10)}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
                            <Faq />
                        </div>
                    </TabPanel>
                </Tabs>

                {/* Related Courses */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">Related Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedCourses.map((data) => (
                            <div key={data.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                                <Link to={`/course/${data.id}`}>
                                    <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
                                </Link>
                                <div className="p-4">
                                    <Link to={`/course/${data.id}`} className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                        {data.name}
                                    </Link>
                                    <h4 className="mt-2 text-lg font-semibold">
                                        <Link to={`/course/${data.id}`} className="hover:text-indigo-600">
                                            {data.title}
                                        </Link>
                                    </h4>
                                    <div className="flex items-center mt-2">
                                        <img src={data.authorImg} alt={data.author} className="w-8 h-8 rounded-full mr-2" />
                                        <span className="text-gray-700">{data.author}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <StarRating rating={parseFloat(data.review)} />
                                        <span className="ml-1 text-gray-600">{data.review} Reviews</span>
                                    </div>
                                    <div className="mt-3 flex justify-between items-center">
                                        <div>
                                            <span className="text-indigo-600 font-semibold">{data.price}</span>
                                            <span className="text-gray-400 line-through ml-2">{data.regularPrice}</span>
                                        </div>
                                        <Link to={`/course/${data.id}`} className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition duration-200">
                                            Enroll
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span><strong>Instructor:</strong> {courseAuthor}</span>
                        </li>
                        <li className="flex items-center">
                            <span><strong>Subject:</strong> {courseName}</span>
                        </li>
                        <li className="flex items-center">
                            <span><strong>Lectures:</strong> {courseLesson} lectures</span>
                        </li>
    
                    </ul>
                    <button
                        onClick={handleStartNowClick}
                        className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsMain;
