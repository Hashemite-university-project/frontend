// src/components/ViewProject/ProjectInformation.jsx
import React from 'react';

const ProjectInformation = () => {
  return (
    <div className="space-y-6">
      {/* Instructor Information */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Instructor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">Name</h3>
            <p>Dr. John Doe</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">Email</h3>
            <p>johndoe@example.com</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">Department</h3>
            <p>Computer Science</p>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Project Description</h2>
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
          <p>
            This project aims to develop a comprehensive platform for managing and executing code within a collaborative environment. It integrates real-time chat, code editing, and execution capabilities to enhance productivity and teamwork.
          </p>
        </div>
      </section>

      {/* Project Objectives */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Project Objectives</h2>
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Develop a responsive code editor with multi-language support.</li>
            <li>Implement real-time chat functionality for team collaboration.</li>
            <li>Enable code execution and output display within the platform.</li>
            <li>Ensure seamless integration with project management tools.</li>
          </ul>
        </div>
      </section>

      {/* Project Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">Start Date</h3>
            <p>January 1, 2024</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">End Date</h3>
            <p>December 31, 2024</p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">Alice Smith</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">Bob Johnson</h3>
            <p>Backend Developer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">Charlie Brown</h3>
            <p>DevOps Engineer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="font-medium">David Wilson</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInformation;
