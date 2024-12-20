import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import DashboardLayout from '../DashboadLayouts/DashbordLayout';

const ProjectInformation = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null); 
  const [projectSkills, setProjectSkills] = useState();
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/projectDetails/${projectId}`, { withCredentials: true });
        setProject(response.data.projectDetails);
        // setTeamMembers(response.data.teamMembers);
        setProjectSkills(await JSON.parse(response.data.projectDetails.required_skills));
        console.log(response.data.projectDetails.required_skills);//"['JavaScript', 'TypeScript']"
        console.log(JSON.parse(response.data.projectDetails.required_skills));//['JavaScript', 'TypeScript']
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, []);

  if (!project) {
    return <p>Loading project details...</p>;
  }

  return (
    <DashboardLayout>
      <main className="md:ml-64">
    <div className="space-y-6">
      {/* Instructor Information */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Instructor Information</h2>
        <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-300">Name</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.instructor.user.user_name}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-300">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.instructor.user.user_email}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-300">Department</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.instructor.major}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description and Objectives */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Project Description & Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Project Description</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.project_description}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Required Skills</h3>
            {/* <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            {projectSkills.map((skill, index) => (
                <li key={index}>asas</li>
            ))}
            </ul> */}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Project Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Start Date</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.start_date}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">End Date</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.end_date}</p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow rounded p-6">
              <h3 className="font-medium text-gray-800 dark:text-gray-300">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))} */}
        </div>
      </section>
    </div>
    </main>
    </DashboardLayout>
  );
};

export default ProjectInformation;
