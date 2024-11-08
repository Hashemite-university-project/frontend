import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
    {
        "id": 1,
        "image": "1.png",
        "bannerImg": "course-banner2.jpg",
        "name": "UX Design",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "5",
        "enrolled": "56",
        "price": "$72.00",
        "regularPrice": "$95.00",
        "duration": "3 Weeks",
        "type": "Beginner",
        "language": "Spanish",
        "review": "4.5",
        "title": "Dave conservatoire is the Entirely free online"
    },
    {
        "id": 2,
        "image": "2.png",
        "bannerImg": "course-banner1.jpg",
        "name": "UX Design",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Beginner",
        "language": "Spanish",
        "review": "4.7",
        "title": "Strategy law and Organization foundation"
    },
    {
        "id": 3,
        "image": "3.png",
        "bannerImg": "course-banner3.jpg",
        "name": "UX Design",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Beginner",
        "language": "Italic",
        "review": "4.2",
        "title": "Python for Data Science & Machine Learning"
    },
    {
        "id": 4,
        "image": "4.png",
        "bannerImg": "course-banner2.jpg",
        "name": "UX Design",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Expert",
        "language": "Bangla",
        "review": "4.3",
        "title": "The complete web develop Ment bootcamp."
    },
    {
        "id": 5,
        "image": "1.jpg",
        "bannerImg": "course-banner3.jpg",
        "name": "Marketing",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Intermediate",
        "language": "English",
        "review": "4.2",
        "title": "The Most Complete Design Thinking Course On The Market"
    },
    {
        "id": 6,
        "image": "2.jpg",
        "bannerImg": "course-banner3.jpg",
        "name": "Marketing",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Intermediate",
        "language": "English",
        "review": "4.2",
        "title": "Everything You Need to Know About Business"
    },
    {
        "id": 7,
        "image": "3.jpg",
        "bannerImg": "course-banner2.jpg",
        "name": "Marketing",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Intermediate",
        "language": "English",
        "review": "4.3",
        "title": "Statistics Data Science and Business Analysis"
    },
    {
        "id": 8,
        "image": "4.jpg",
        "bannerImg": "course-banner3.jpg",
        "name": "Marketing",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Intermediate",
        "language": "English",
        "review": "4.2",
        "title": "Become a UI/UX Designer Everything You need To Know"
    },
    {
        "id": 9,
        "image": "5.jpg",
        "bannerImg": "course-banner3.jpg",
        "name": "Marketing",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Intermediate",
        "language": "English",
        "review": "4.2",
        "title": "Learn Essentials of User Interface Design in Figma"
    },
    {
        "id": 10,
        "image": "6.jpg",
        "bannerImg": "course-banner3.jpg",
        "name": "Marketing",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$68.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Intermediate",
        "language": "English",
        "review": "4.2",
        "title": "AWS Certified Solutions Architect Associate"
    },
    {
        "id": 11,
        "image": "5.png",
        "bannerImg": "course-banner3.jpg",
        "name": "Education",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$58.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Beginner",
        "language": "Urdu",
        "review": "4.2",
        "title": "The Most Complete Design Thinking Course On The Market"
    },
    {
        "id": 12,
        "image": "6.png",
        "bannerImg": "course-banner3.jpg",
        "name": "Education",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$49.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Expert",
        "language": "Arabic",
        "review": "4.2",
        "title": "Consulting Approach to Problem Solving Working."
    },
    {
        "id": 13,
        "image": "7.png",
        "bannerImg": "course-banner3.jpg",
        "name": "Development",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$36.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Expert",
        "language": "Bangla",
        "review": "4.2",
        "title": "Business Approach to Problem Solving Banner"
    },
    {
        "id": 14,
        "image": "8.png",
        "bannerImg": "course-banner3.jpg",
        "name": "Development",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$76.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Expert",
        "language": "Bangle",
        "review": "4.2",
        "title": "Learn Essentials of User Interface Design in Figma"
    },
    {
        "id": 15,
        "image": "9.png",
        "bannerImg": "course-banner3.jpg",
        "name": "Development",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$85.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Expert",
        "language": "Italic",
        "review": "4.2",
        "title": "Find Music Category inside your Soula"
    },
    {
        "id": 16,
        "image": "10.png",
        "bannerImg": "course-banner3.jpg",
        "name": "Development",
        "author": "Charlie Doyle",
        "authorImg": "author.png",
        "lesson": "4",
        "enrolled": "77",
        "price": "$99.00",
        "regularPrice": "$95.00",
        "duration": "2 Weeks",
        "type": "Beginner",
        "language": "Spanish",
        "review": "4.2",
        "title": "Successful Negotiation: Master Your Negotiating Skills"
    }
];

const CourseSidebar = () => {

    return (
        <div className="container mx-auto py-8 px-4">

                <div className="bg-gray-50 shadow-md p-4 rounded-lg space-y-6">
                    {/* Search Widget */}
                    <div className="widget">
                        <h3 className="text-lg font-semibold mb-3">Search</h3>
                        <form className="flex">
                            <input
                                type="text"
                                name="input"
                                placeholder="Search..."
                                className="w-full border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
                            />
                            <button className="bg-indigo-600 text-white px-4 rounded-r">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Filter by Category */}
                    <div className="widget">
                        <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
                        <ul className="space-y-2">
                            {['Featured courses', 'Education', 'Business', 'IT Management', 'Development', 'Creative', 'Art & Design'].map((category, index) => (
                                <li key={index} className="flex items-center">
                                    <input type="checkbox" id={`category-${index}`} className="mr-2" />
                                    <label htmlFor={`category-${index}`} className="text-gray-700 flex-1">{category}</label>
                                    <span className="text-gray-500">(8)</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skill Level */}
                    <div className="widget">
                        <h3 className="text-lg font-semibold mb-3">Skill Level</h3>
                        <ul className="space-y-2">
                            {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
                                <li key={index} className="flex items-center">
                                    <input type="checkbox" id={`level-${index}`} className="mr-2" />
                                    <label htmlFor={`level-${index}`} className="text-gray-700">{level}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="widget">
                        <h3 className="text-lg font-semibold mb-3">Price</h3>
                        <ul className="space-y-2">
                            {['Free Courses', 'Paid Courses', 'Only Subscription'].map((price, index) => (
                                <li key={index} className="flex items-center">
                                    <input type="checkbox" id={`price-${index}`} className="mr-2" />
                                    <label htmlFor={`price-${index}`} className="text-gray-700">{price}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Courses */}
                    <div className="widget">
                        <h3 className="text-lg font-semibold mb-3">Popular Courses</h3>
                        <ul className="space-y-4">
                            {courses.slice(0, 3).map((course) => (
                                <li key={course.id} className="flex items-center">
                                    <Link to={`/course/${course.id}`}>
                                        <img
                                            src={require(`../../../assets/course/${course.image}`)}
                                            alt={course.title}
                                            className="w-16 h-16 object-cover rounded-lg mr-3"
                                        />
                                    </Link>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            <Link to={`/course/${course.id}`} className="hover:text-indigo-600 transition-colors">
                                                {course.title}
                                            </Link>
                                        </h4>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Rating Filter */}
                    <div className="widget">
                        <h3 className="text-lg font-semibold mb-3">Rating</h3>
                        <ul className="space-y-2">
                            {[4.5, 3.5, 2.0].map((rating, index) => (
                                <li key={index} className="flex items-center">
                                    <input type="checkbox" id={`rating-${index}`} className="mr-2" />
                                    <label htmlFor={`rating-${index}`} className="text-gray-700 flex items-center space-x-1">
                                        <div className="text-yellow-500">
                                            {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
                                        </div>
                                        <span>{rating} & up</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>


    );
}

export default CourseSidebar;