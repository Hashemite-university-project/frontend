import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

function MemberCVHome() {  
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:8000/user/profileCV/${id}`);
        
        setUser(userResponse.data.user);
        setProjects(userResponse.data.projects);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [id]);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 pt-10 mt-10 mb-6 px-20">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={user.user.user_img}
                    alt="Profile"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  />
                  <h1 className="text-xl font-bold">{user.user.user_name}</h1>
                  <p className="text-gray-700">{user.major}</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    {/* <Link
                      to="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </Link> */}
                    <Link
                      to="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Download Resume
                    </Link>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    {user.skills.map((skill, index) => (
                      <li key={index} className="mb-2">{skill.skill_name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">{user.about_me}</p>
                <h3 className="font-semibold text-center mt-3 -mb-2 mt-7">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  {user.user_link.map((link, index) => (
                    <Link
                      key={index}
                      className="text-gray-700 hover:text-blue-600"
                      href={link.link}
                      target="_blank"
                    >
                      {link.link_name}
                    </Link>
                  ))}
                </div>
                <h2 className="text-xl font-bold mt-10 mb-4">Projects</h2>
                {projects.map((project, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">{project.project_name}</span>
                      <p>
                      <span className="text-gray-700 text-sm">
                            {new Date(project.start_date).toLocaleDateString()} - {new Date(project.end_date).toLocaleDateString()}
                      </span>
                      </p>
                    </div>
                    <p className="mt-2 w-5/6 text-sm">
                    {project.project_description.length > 250 
                        ? project.project_description.slice(0, 250) + '...' 
                        : project.project_description}
                    </p>
                    <span className="text-gray-700 mr-2 text-sm">
                      Instructor: {project.instructor.user.user_name}
                    </span>
                  </div>
                ))}
                {/* <h2 className="text-xl font-bold mt-10 mb-4">Courses</h2>
                {projects.map((project, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">{project.project_name}</span>
                      <p>
                      <span className="text-gray-700 text-sm">
                            {new Date(project.start_date).toLocaleDateString()} - {new Date(project.end_date).toLocaleDateString()}
                      </span>
                      </p>
                    </div>
                    <p className="mt-2 w-5/6 text-sm">
                    {project.project_description.length > 250 
                        ? project.project_description.slice(0, 250) + '...' 
                        : project.project_description}
                    </p>
                    <span className="text-gray-700 mr-2 text-sm">
                      Instructor: {project.instructor.user.user_name}
                    </span>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemberCVHome;



// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

// const UserProfile = () => {
//   const userData = {
//     name: "John Doe",
//     title: "Senior Frontend Developer",
//     about: "Passionate frontend developer with 5+ years of experience in building scalable web applications. Specialized in React.js and modern CSS frameworks. Always eager to learn new technologies and contribute to innovative projects.",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     skills: [
//       "React.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Next.js",
//       "Node.js",
//       "GraphQL",
//       "AWS",
//       "Docker"
//     ],
//     projects: [
//       {
//         title: "E-commerce Platform",
//         description: "Built a full-featured e-commerce platform using React.js and Node.js with real-time inventory management.",
//         image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         link: "#"
//       },
//       {
//         title: "Portfolio Manager",
//         description: "Developed a portfolio management system with real-time data visualization using D3.js.",
//         image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         link: "#"
//       },
//       {
//         title: "Task Management App",
//         description: "Created a collaborative task management application with real-time updates using WebSocket.",
//         image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         link: "#"
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white shadow rounded-lg overflow-hidden">
//           {/* Header Section */}
//           <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-16 text-center">
//             <img
//               src={userData.avatar}
//               alt="Profile"
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
//               onError={(e) => {
//                 e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
//               }}
//             />
//             <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
//             <p className="text-xl text-blue-100">{userData.title}</p>
//           </div>

//           {/* About Me Section */}
//           <div className="px-6 py-8 border-b">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
//             <p className="text-gray-600 leading-relaxed">{userData.about}</p>
//           </div>

//           {/* Skills Section */}
//           <div className="px-6 py-8 border-b">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
//             <div className="flex flex-wrap gap-2">
//               {userData.skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Projects Section */}
//           <div className="px-6 py-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {userData.projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover"
//                     onError={(e) => {
//                       e.target.src = "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
//                     }}
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4">{project.description}</p>
//                     <a
//                       href={project.link}
//                       className="inline-flex items-center text-blue-600 hover:text-blue-700"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View Project <FaExternalLinkAlt className="ml-1" />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Links */}
//           <div className="bg-gray-50 px-6 py-8">
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-gray-900 transition-colors"
//                 aria-label="GitHub Profile"
//               >
//                 <FaGithub className="w-8 h-8" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-gray-900 transition-colors"
//                 aria-label="LinkedIn Profile"
//               >
//                 <FaLinkedin className="w-8 h-8" />
//               </a>
//               <a
//                 href="mailto:john@example.com"
//                 className="text-gray-600 hover:text-gray-900 transition-colors"
//                 aria-label="Email Contact"
//               >
//                 <FaEnvelope className="w-8 h-8" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;