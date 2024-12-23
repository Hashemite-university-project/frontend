import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProjectModal from './CreateProjectModal';
import UpdateProjectModal from './UpdateProjectModal';
import { PencilIcon, CheckIcon, XIcon } from '@heroicons/react/solid';

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, [search]);

  const fetchProjects = () => {
    axios
      .get(`http://localhost:8000/project/instructorProjects?project_name=${search}`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          setProjects(response.data);
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the projects!', error);
        toast.error('Failed to fetch projects.', {
          position: 'top-right',
          autoClose: 5000,
        });
      });
  };

  const confirmDelete = (projectId) => {
    // Deleting project logic
    axios
      .put(`http://localhost:8000/project/delete/${projectId}`, {}, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          setProjects((prevProjects) => prevProjects.filter((project) => project.project_id !== projectId));
          toast.success('Project deleted successfully!', {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        console.error('There was an error deleting the project!', error);
        toast.error('Failed to delete project.', {
          position: 'top-right',
          autoClose: 5000,
        });
        setIsDeleteModalOpen(false); // Close modal on error
      });
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false); // Close modal without deleting
  };

  const handleDeleteProject = (projectId) => {
    setProjectToDelete(projectId);
    setIsDeleteModalOpen(true); // Show confirmation modal
  };

  const openUpdateModal = (project) => {
    setSelectedProject(project);
    setIsUpdateModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mx-auto py-6">
      <ToastContainer />
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        {/* Search Input */}
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <input
            type="text"
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#0d3656] transition duration-200"
            placeholder="Search projects..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        {/* Add Project Button */}
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-[#152c5a] to-[#1e4d8b] text-white rounded-lg hover:bg-[#1e4d8b] focus:ring-2 focus:ring-[#0d3656] transition duration-200"
          >
            Add Project
          </button>

          <CreateProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fetchProjects={fetchProjects} />
        </div>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gradient-to-r from-[#152c5a] to-[#1e4d8b] text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Thumbnail
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Project Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider hidden sm:table-cell">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr key={project.project_id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  {/* Thumbnail */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={project.project_img}
                      alt={project.project_name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
                    />
                  </td>

                  {/* Project Name */}
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-sm sm:text-base">
                    {project.project_name}
                  </th>

                  {/* Category (hidden on screens smaller than sm) */}
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-300 hidden sm:table-cell text-sm sm:text-base">
                    {project.category.category_name}
                  </td>
                  {/* Action */}
                  <td className="px-6 py-4 text-center space-x-2">
                    <button
                      onClick={() => openUpdateModal(project)}
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium transition duration-200"
                    >
                        <PencilIcon className="h-5 w-5 inline-block mr-1" />
                      Edit
                    </button>
                    <button
                      className="text-red-600 dark:text-red-500 hover:underline text-sm sm:text-base"
                      onClick={() => handleDeleteProject(project.project_id)}
                    > 
                      <XIcon className="h-5 w-5 inline-block mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && projectToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>
              Are you sure you want to delete{' '}
              <strong>{projects.find((project) => project.project_id === projectToDelete)?.project_name}</strong>?
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => confirmDelete(projectToDelete)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <UpdateProjectModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        fetchProjects={fetchProjects}
        project={selectedProject} // Pass the entire project object
      />
    </div>
  );
}

export default ProjectsList;
