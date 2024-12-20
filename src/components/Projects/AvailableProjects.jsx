import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DashboardLayout from '../DashboadLayouts/DashbordLayout';

function AvailableProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/allProjects/${'a'}`, { withCredentials: true });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <main className="md:ml-64">
        <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.project_id}
              className="flex justify-between flex-col group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4"
            >
              <div className="flex h-60 flex-col justify-between overflow-hidden">
                <img
                  src={project.project_img}
                  className="group-hover:scale-110 h-full w-full object-cover duration-200"
                  alt={project.project_name}
                />
              </div>
              <div className="flex-1 overflow-hidden bg-white px-6 py-8">
                <h5 className="group-hover:text-indigo-600 mb-4 text-xl font-bold">
                  {project.project_name}
                </h5>
                <p className="mb-8 text-gray-600">
                    {project.project_description.length > 150
                        ? `${project.project_description.slice(0, 150)}...`
                        : project.project_description}
                </p>
                <div className="flex justify-between items-center align-middle">
                  <Link
                    to={`/theProjectDetails/${project.project_id}`}
                    className="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
                  >
                    <span className="underline">View Details</span>
                  </Link>
                  <div className="max-w-full flex-none lg:px-4">
                    <h5 className="text-sm font-bold">Participants: {project.participants? project.participants.length : 0}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </DashboardLayout>
  );
}

export default AvailableProjects;
