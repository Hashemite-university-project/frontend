import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout';
import ProjectsCards from '../../../components/Projects/ProjectsCards';

function EnrolledProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8000/project/student/enrolledProjects', { withCredentials: true });
                setProjects(response.data);
            } catch (err) {
                setError(err.message || 'Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <DashboardLayout>
            <main className="p-4 md:ml-64 h-screen pt-10  dark:bg-gray-900 transition-colors duration-300">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Projects</h1>

                {loading && <p className="text-gray-500 dark:text-gray-400">Loading projects...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                
                {!loading && !error && (
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {projects.map((project) => (
                            <ProjectsCards key={project.project_id} project={project} />
                        ))}
                    </div>
                )}
            </main>
        </DashboardLayout>
    );
}

export default EnrolledProjects;
