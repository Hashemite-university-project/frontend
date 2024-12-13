import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrump';
import EnrolledCoursesCards from '../../../components/Student/Courses/EnrolledCoursesCards';

function EnrolledCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/course/enrollmentCourses', {
          withCredentials: true, // Include cookies
        });
        console.log(response.data); // Debugging: Check the structure of the response
        setCourses(Array.isArray(response.data) ? response.data : []); // Ensure courses is an array
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch courses.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <DashboardLayout>
      <main className="p-4 md:ml-64 h-full bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300 ">
        <div className="container mx-auto px-4">
          <div className="my-5">
            <Breadcrumb pageTitle="Enrolled Courses" />
          </div>

          {courses.length === 0 ? ( // Check if courses is empty
            <div className="text-center text-gray-500">No enrolled courses found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <EnrolledCoursesCards
                  key={index}
                  courseID={course.course_id}
                  courseImg={course.course_img || 'default-course-image.png'} // Provide a default image
                  courseTitle={course.course_name}
                  courseAuthor={course.instructor?.user?.user_name || 'Unknown Author'}
                  courseType="Beginner" // Add type if it's not in the API response
                  courseLesson="5 Lessons" // Add lesson count if not in the API
                  courseDuration="3 Weeks" // Add duration if not in the API
                  courseReview={course.rating || '0.0'}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            <Link className="px-3 py-1 bg-indigo-600 text-white rounded" to="#">1</Link>
            <Link className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100" to="#">2</Link>
            <Link className="flex items-center px-3 py-1 border border-gray-300 rounded hover:bg-gray-100" to="#">
              Next <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}

export default EnrolledCourses;