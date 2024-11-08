import React from 'react';
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout';
import CourseSidebar from './CourseSidebar';
import Breadcrumb from '../../../components/Breadcrump/';
import AllCoursesCards from '../../../components/Student/Courses/AllCoursesCards';
import { Link } from 'react-router-dom';
import courseImag1 from '../../../assets/course/1.png';
import courseImag2 from '../../../assets/course/2.png';
import courseImag3 from '../../../assets/course/3.png';
import courseImag4 from '../../../assets/course/4.png';
import courseImag5 from '../../../assets/course/5.png';
import courseImag6 from '../../../assets/course/6.png';
import courseImag7 from '../../../assets/course/7.png';
import courseImag8 from '../../../assets/course/8.png';
import courseImag9 from '../../../assets/course/9.png';
import courseImag10 from '../../../assets/course/10.png';

const courses = [
  {
    id: 1,
    image: courseImag1,
    bannerImg: "course-banner2.jpg",
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
    bannerImg: "course-banner1.jpg",
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
  {
    id: 3,
    image: courseImag3,
    bannerImg: "course-banner3.jpg",
    name: "UX Design",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Beginner",
    language: "Italic",
    review: "4.2",
    title: "Python for Data Science & Machine Learning"
  },
  {
    id: 4,
    image: courseImag4,
    bannerImg: "course-banner2.jpg",
    name: "UX Design",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Expert",
    language: "Bangla",
    review: "4.3",
    title: "The complete web develop Ment bootcamp."
  },
  {
    id: 5,
    image: courseImag5,
    bannerImg: "course-banner3.jpg",
    name: "Marketing",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Intermediate",
    language: "English",
    review: "4.2",
    title: "The Most Complete Design Thinking Course On The Market"
  },
  {
    id: 6,
    image: courseImag6,
    bannerImg: "course-banner3.jpg",
    name: "Marketing",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Intermediate",
    language: "English",
    review: "4.2",
    title: "Everything You Need to Know About Business"
  },
  {
    id: 7,
    image: courseImag7,
    bannerImg: "course-banner2.jpg",
    name: "Marketing",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Intermediate",
    language: "English",
    review: "4.3",
    title: "Statistics Data Science and Business Analysis"
  },
  {
    id: 8,
    image: courseImag8,
    bannerImg: "course-banner3.jpg",
    name: "Marketing",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Intermediate",
    language: "English",
    review: "4.2",
    title: "Become a UI/UX Designer Everything You need To Know"
  },
  {
    id: 9,
    image: courseImag9,
    bannerImg: "course-banner3.jpg",
    name: "Marketing",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Intermediate",
    language: "English",
    review: "4.2",
    title: "Learn Essentials of User Interface Design in Figma"
  },
  {
    id: 10,
    image: courseImag10,
    bannerImg: "course-banner3.jpg",
    name: "Marketing",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$68.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Intermediate",
    language: "English",
    review: "4.2",
    title: "AWS Certified Solutions Architect Associate"
  },
  {
    id: 11,
    image: courseImag5,
    bannerImg: "course-banner3.jpg",
    name: "Education",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$58.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Beginner",
    language: "Urdu",
    review: "4.2",
    title: "The Most Complete Design Thinking Course On The Market"
  },
  {
    id: 12,
    image: courseImag6,
    bannerImg: "course-banner3.jpg",
    name: "Education",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$49.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Expert",
    language: "Arabic",
    review: "4.2",
    title: "Consulting Approach to Problem Solving Working."
  },
  {
    id: 13,
    image: courseImag7,
    bannerImg: "course-banner3.jpg",
    name: "Development",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$36.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Expert",
    language: "Bangla",
    review: "4.2",
    title: "Business Approach to Problem Solving Banner"
  },
  {
    id: 14,
    image: courseImag8,
    bannerImg: "course-banner3.jpg",
    name: "Development",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$76.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Expert",
    language: "Bangle",
    review: "4.2",
    title: "Learn Essentials of User Interface Design in Figma"
  },
  {
    id: 15,
    image: courseImag9,
    bannerImg: "course-banner3.jpg",
    name: "Development",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$85.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Expert",
    language: "Italic",
    review: "4.2",
    title: "Find Music Category inside your Soula"
  },
  {
    id: 16,
    image: courseImag10,
    bannerImg: "course-banner3.jpg",
    name: "Development",
    author: "Charlie Doyle",
    authorImg: "author.png",
    lesson: "4",
    enrolled: "77",
    price: "$99.00",
    regularPrice: "$95.00",
    duration: "2 Weeks",
    type: "Beginner",
    language: "Spanish",
    review: "4.2",
    title: "Successful Negotiation: Master Your Negotiating Skills"
  }
];

function AllCourses() {
  return (
    <DashboardLayout>
      <main className="p-4 md:ml-64 h-full pt-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="react-wrapper">
          <div className="react-wrapper-inner">
            <div className="container mx-auto px-4">
              <div className='my-5'>
                <Breadcrumb pageTitle="Available Courses" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Course List Section */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  {courses.map((data, index) => (
                    <AllCoursesCards
                      key={index}
                      courseID={data.id}
                      courseImg={data.image}
                      courseTitle={data.title}
                      courseAuthor={data.author}
                      courseType={data.type}
                      courseLesson={data.lesson}
                      courseDuration={data.duration}
                      courseReview={data.review}
                    />
                  ))}
                </div>

                {/* Sidebar */}
                <CourseSidebar />

                {/* Pagination */}
                <div className="flex justify-center mt-6 space-x-2">
                  <Link className="px-3 py-1 bg-indigo-600 text-white rounded" to="#">1</Link>
                  <Link className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100" to="#">2</Link>
                  <Link className="flex items-center px-3 py-1 border border-gray-300 rounded hover:bg-gray-100" to="#">
                    Next <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}

export default AllCourses;