import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectsCards({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md overflow-hidden transition-colors duration-300">
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
        <NavLink
        to={`/enrolled-projects/${project.id}`}
        className="w-full p-2 bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-200 py-2 hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
          View Project
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectsCards;
