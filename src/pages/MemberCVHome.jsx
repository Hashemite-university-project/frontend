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
                    <Link
                      to="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </Link>
                    <Link
                      to="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
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
                <h3 className="font-semibold text-center mt-3 -mb-2">
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
                <h2 className="text-xl font-bold mt-6 mb-4">Projects</h2>
                {projects.map((project, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">{project.project_name}</span>
                      <p>
                        <span className="text-gray-700">
                          {project.start_date} - {project.end_date}
                        </span>
                      </p>
                    </div>
                    <p className="mt-2">{project.project_description}</p>
                    <span className="text-gray-700 mr-2">
                      Instructor: {project.project_instructor}
                    </span>
                  </div>
                ))}
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
