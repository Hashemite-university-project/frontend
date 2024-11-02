import React, { useState } from 'react';
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout';
import ProjectsCards from '../../../components/Projects/ProjectsCards';
import projectImg from '../../../assets/project-management.png'
function Index() {
    const [projects] = useState([
        {
            id: 1,
            image: projectImg,
            name: 'Project Alpha',
            instructor: 'Dr. John Doe',
            skills: ['JavaScript', 'React', 'Node.js'],
        },
        {
            id: 2,
            image: projectImg,
            name: 'Project Beta',
            instructor: 'Prof. Jane Smith',
            skills: ['Python', 'Django', 'Machine Learning'],
        },
        {
            id: 3,
            image: projectImg,
            name: 'Project Gamma',
            instructor: 'Unknown Instructor',
            skills: ['Java', 'Spring Boot', 'Microservices'],
        },
    ]);

    return (
        <DashboardLayout>
            <main className="p-4 md:ml-64 h-screen pt-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectsCards key={project.id} project={project} />
                    ))}
                </div>
            </main>
        </DashboardLayout>
    );
}

export default Index;
