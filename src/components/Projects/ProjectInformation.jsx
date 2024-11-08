import React from 'react';

const ProjectInformation = () => {
  return (
    <div className="space-y-6">
      {/* Instructor Information */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Instructor Information</h2>
        <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-300">Name</h3>
              <p className="text-gray-600 dark:text-gray-400">Dr. John Doe</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-300">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">johndoe@example.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-300">Department</h3>
              <p className="text-gray-600 dark:text-gray-400">Computer Science</p>
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
            <p className="text-gray-600 dark:text-gray-400">
              This project aims to develop a comprehensive platform for managing and executing code within a collaborative environment. It integrates real-time chat, code editing, and execution capabilities to enhance productivity and teamwork.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Project Objectives</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Develop a responsive code editor with multi-language support.</li>
              <li>Implement real-time chat functionality for team collaboration.</li>
              <li>Enable code execution and output display within the platform.</li>
              <li>Ensure seamless integration with project management tools.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Project Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Start Date</h3>
            <p className="text-gray-600 dark:text-gray-400">January 1, 2024</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">End Date</h3>
            <p className="text-gray-600 dark:text-gray-400">December 31, 2024</p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Alice Smith</h3>
            <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Bob Johnson</h3>
            <p className="text-gray-600 dark:text-gray-400">Backend Developer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">Charlie Brown</h3>
            <p className="text-gray-600 dark:text-gray-400">DevOps Engineer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
            <h3 className="font-medium text-gray-800 dark:text-gray-300">David Wilson</h3>
            <p className="text-gray-600 dark:text-gray-400">UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInformation;
