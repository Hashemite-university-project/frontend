import React from 'react';
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrump';
import EnrolledCoursesCards from '../../../components/Student/Courses/EnrolledCoursesCards';
import courseImag1 from '../../../assets/course/1.png';
import courseImag2 from '../../../assets/course/2.png';
const courses = [
    {
        id: 1,
        image: courseImag1,
        name: "UX Design",
        author: "Charlie Doyle",
        authorImg: "author.png",
        lesson: "5",
        enrolled: "56",
        price: "$72.00",
        regularPrice: "$95.00",
        duration: "3 Weeks",
        type: "Beginner",
        language: "Spanish",
        review: "4.5",
        title: "Dave conservatoire is the Entirely free online"
    },
    {
        id: 2,
        image: courseImag2,
        name: "UX Design",
        author: "Charlie Doyle",
        authorImg: "author.png",
        lesson: "4",
        enrolled: "77",
        price: "$68.00",
        regularPrice: "$95.00",
        duration: "2 Weeks",
        type: "Beginner",
        language: "Spanish",
        review: "4.7",
        title: "Strategy law and Organization foundation"
    },
    // ... more course objects as in your initial data
];

function EnrolledCourses() {
  return (
    <DashboardLayout>
      <main className="p-4 md:ml-64 h-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
            <div className='my-5'>
          <Breadcrumb pageTitle="Enrolled Courses" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <EnrolledCoursesCards
                key={index}
                courseID={course.id}
                courseImg={course.image}
                courseTitle={course.title}
                courseAuthor={course.author}
                courseType={course.type}
                courseLesson={course.lesson}
                courseDuration={course.duration}
                courseReview={course.review}
              />
            ))}
          </div>

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
