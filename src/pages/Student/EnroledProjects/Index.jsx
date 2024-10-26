import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout';

function Index() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/project/student/enrolledProjects', {
            withCredentials: true,
        })
            .then(response => {
                const fetchedProjects = response.data.map(project => ({
                    id: project.project_id,
                    image: project.project_img,
                    name: project.project_name,
                    instructor: project.project_instructor || 'Unknown Instructor',
                    skills: project.project_participants,
                }));
                setProjects(fetchedProjects);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    return (
        <DashboardLayout>
            <main className="p-4 md:ml-64 h-auto pt-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white dark:bg-gray-800 shadow-md overflow-hidden transition-colors duration-300">
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">{project.name}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">Instructor: {project.instructor}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-medium mr-2 px-2.5 py-0.5"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-200 py-2 hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </DashboardLayout>
    );
}

export default Index;
