import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateProjectModal({ isOpen, onClose, fetchProjects, project }) {
  const [categories, setCategories] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [projectImage, setProjectImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && project) {
      // Pre-fill the form with project data
      setProjectName(project.project_name || '');
      setProjectDescription(project.project_description || '');
      setProjectCategory(project.project_category || '');
      setStartDate(project.start_date ? project.start_date.split('T')[0] : '');
      setEndDate(project.end_date ? project.end_date.split('T')[0] : '');
      setRequiredSkills(project.required_skills || ''); // Directly set as string
    }
  }, [isOpen, project]);

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
    }
  }, [isOpen]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/category', {
        withCredentials: true,
      });
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to fetch categories.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('project_name', projectName);
    formData.append('project_description', projectDescription);
    formData.append('project_category', projectCategory); // Pass category ID as string
    formData.append('start_date', startDate);
    formData.append('end_date', endDate);
    formData.append('required_skills', requiredSkills); // Send as string
    formData.append('project_img', projectImage);

    try {
      const response = await axios.put(
        `http://localhost:8000/project/instructor/update/${project.project_id}`,
        formData,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success('Project updated successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });
        fetchProjects(); // Refresh projects list
        onClose(); // Close modal

        // Optionally, reset fields if you want to
        setProjectName('');
        setProjectDescription('');
        setProjectCategory('');
        setStartDate('');
        setEndDate('');
        setRequiredSkills('');
        setProjectImage(null);
      }
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('Failed to update project. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/2">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Update Project</h2>
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              ×
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Description</label>
              <textarea
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
              <select
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
                value={projectCategory}
                onChange={(e) => setProjectCategory(e.target.value)}
                required
              >
                <option value="">Select a Category</option>
                {categories.map((category) => (
                  <option key={category.category_id} value={category.category_id}>
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Required Skills (comma-separated)</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
                value={requiredSkills}
                onChange={(e) => setRequiredSkills(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
                onChange={(e) => setProjectImage(e.target.files[0])}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 bg-[#0d3656] text-white rounded-md hover:bg-[#092c4a] ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Updating...' : 'Update Project'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProjectModal;