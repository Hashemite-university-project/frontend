// src/pages/Student/Courses/CourseDetailsMain.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Faq from '../../../components/Faq';
import 'react-tabs/style/react-tabs.css';

// StarRating Component for reusability
const StarRating = ({ rating = 0 }) => {
  // Ensure rating is a valid number between 0 and 5
  const validRating = Math.min(Math.max(Number(rating), 0), 5);
  const fullStars = Math.floor(validRating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={`full-${index}`}
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.368 2.45a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.45a1 1 0 00-1.175 0l-3.368 2.45c-.784.57-1.838-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.86 9.385c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.368 2.45a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.45a1 1 0 00-1.175 0l-3.368 2.45c-.784.57-1.838-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.86 9.385c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </div>
  );
};

const CourseDetailsMain = ({
  course,
  content = [],
  allCourses = [],
  isEnrolled = false,
}) => {
  const [lockedMessage, setLockedMessage] = useState('');

  const handleStartNowClick = () => {
    console.log('Start Now clicked for course ID:', course.course_id);
    // Implement navigation to enrollment or login page if needed
  };

  const handleLockedContentClick = (title) => {
    if (!isEnrolled) {
      setLockedMessage(`You haven't enrolled in this course yet to access "${title}".`);
    } else {
      // Optionally, navigate to the content if enrolled
      // e.g., navigate(`/course/${course.course_id}/video/${title}`);
    }
  };

  // Display the first video from the content array
  const firstVideo = content.length > 0 ? content[0] : null;

  // Related courses (modify as needed)
  const relatedCourses = allCourses.filter(
    (c) => c.course_id !== course.course_id
  ).slice(0, 2);

  // Debugging: Log content to verify it's received correctly
  console.log('Received content:', content);

  return (
    <div className="flex flex-col lg:flex-row mt-8">
      {/* Main Content */}
      <div className="w-full lg:w-2/3 lg:pr-8">
        {/* Course Video */}
        <div className="mb-8">
          {firstVideo ? (
            <div className="relative pb-[56.25%]">
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                controls
                src={firstVideo.video_url}
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/e5Hc2B50Z7c"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
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
              <div
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{
                  __html: course.course_description,
                }}
              ></div>
              <img
                src={course.course_img}
                alt={course.course_name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Course Curriculum</h3>
              <div
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{
                  __html:
                    course.course_curriculum ||
                    'No curriculum available.',
                }}
              ></div>
              {/* Example Curriculum - Replace with actual data */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Week 1: Introduction
                </h4>
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
                  <span className="text-5xl font-bold text-yellow-500 mr-4">
                    {course.rating}
                  </span>
                  <div className="flex items-center space-x-1">
                    <StarRating rating={course.rating} />
                  </div>
                </div>

                {/* Star Rating Breakdown */}
                <div className="w-full lg:w-2/3">
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center">
                        <span className="w-12 font-semibold">
                          {star} stars
                        </span>
                        <div className="relative flex-1 h-3 bg-gray-200 rounded-full mr-3">
                          <div
                            className="absolute top-0 left-0 h-3 bg-yellow-500 rounded-full"
                            style={{
                              width: `${Math.floor(Math.random() * 100)}%`,
                            }} // Replace with actual data
                          ></div>
                        </div>
                        <span className="w-8 text-gray-600">
                          {Math.floor(Math.random() * 100)}%
                        </span>{' '}
                        {/* Replace with actual data */}
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
        {relatedCourses.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">
              Related Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCourses.map((data) => (
                <div
                  key={data.course_id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <Link to={`/course/${data.course_id}`}>
                    <img
                      src={data.course_img}
                      alt={data.course_name}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link
                      to={`/course/${data.course_id}`}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      {data.course_name}
                    </Link>
                    <h4 className="mt-2 text-lg font-semibold">
                      <Link
                        to={`/course/${data.course_id}`}
                        className="hover:text-indigo-600"
                      >
                        {data.course_description.substring(0, 50)}...
                      </Link>
                    </h4>
                    <div className="flex items-center mt-2">
                      <img
                        src={
                          course.instructor.instructor.user_img ||
                          '/path/to/default/author.png' // Replace with actual default image path
                        }
                        alt={
                          course.instructor.instructor.user_name
                        }
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-gray-700">
                        {course.instructor.instructor.user_name}
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <StarRating rating={parseFloat(course.rating)} />
                      <span className="ml-1 text-gray-600">
                        {course.rating} Reviews
                      </span>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <div>
                        <span className="text-indigo-600 font-semibold">
                          ${parseFloat(course.rating).toFixed(2)}
                        </span>
                        <span className="text-gray-400 line-through ml-2">
                          $
                          {(
                            parseFloat(course.rating) + 10
                          ).toFixed(2)}
                        </span>{' '}
                        {/* Adjust as needed */}
                      </div>
                      <Link
                        to={`/course/${data.course_id}`}
                        className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition duration-200"
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Course Details
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span>
                <strong>Instructor:</strong> 
                {course.instructor.instructor.user_name}
              </span>
            </li>
            <li className="flex items-center">
              <span>
                <strong>Subject:</strong> {course.category.category_name}
              </span>
            </li>
            <li className="flex items-center">
              <span>
                <strong>Lectures:</strong> {content.length} lectures
              </span>
            </li>
            <li className="flex items-center">
              <span>
                <strong>Rating:</strong> {course.rating}
              </span>
            </li>
            <li className="flex items-center">
              <span>
                <strong>Language:</strong> {course.language}
              </span>
            </li>
          </ul>
          <button
            onClick={handleStartNowClick}
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
          >
            Start Now
          </button>

          {/* Locked Content Section */}
          {content.length > 2 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">
                Additional Content
              </h4>
              <ul className="space-y-2">
                {content.slice(2).map((item) => (
                  <li key={item.video_id}>
                    <button
                      onClick={() => handleLockedContentClick(item.video_title)}
                      className="w-full text-left bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
                    >
                      {item.video_title}
                    </button>
                  </li>
                ))}
              </ul>
              {lockedMessage && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                  {lockedMessage}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsMain;