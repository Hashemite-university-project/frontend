import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateProjectModal({ isOpen, onClose, fetchProjects }) {
    const [categories, setCategories] = useState([]); // For storing categories
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectCategory, setProjectCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [requiredSkills, setRequiredSkills] = useState('');
    const [projectImage, setProjectImage] = useState(null);
    const [loading, setLoading] = useState(false);

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
        formData.append('project_category', projectCategory); // Pass category ID
        formData.append('start_date', startDate);
        formData.append('end_date', endDate);
        formData.append('required_skills', requiredSkills.split(',').map(skill => skill.trim())); // Convert skills to array
        formData.append('file', projectImage);

        try {
            const response = await axios.post('http://localhost:8000/project/instructor/createProject', formData, {
                withCredentials: true,
            });

            if (response.status === 201) {
                toast.success('Project created successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                });
                fetchProjects(); // Refresh projects list
                onClose(); // Close modal
                // Clear modal fields
                setProjectName('');
                setProjectDescription('');
                setProjectCategory('');
                setStartDate('');
                setEndDate('');
                setRequiredSkills('');
                setProjectImage(null);
            }
        } catch (error) {
            console.error('Error creating project:', error);
            toast.error('Failed to create project. Please try again.', {
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
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/2">
    <div className="px-4 py-3 border-b flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Create New Project</h2>
      <button
        className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 focus:outline-none"
        onClick={onClose}
      >
        ×
      </button>
    </div>
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Name</label>
        <input
          type="text"
          className="w-full mt-1 p-1 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Description</label>
        <textarea
          className="w-full mt-1 p-1 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          rows="3" // Reduced rows for a smaller textarea
          required
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
        <select
          className="w-full mt-1 p-1 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
          value={projectCategory}
          onChange={(e) => setProjectCategory(e.target.value)}
          required
        >
          <option value="">Select a Category</option>
          {categories.map(category => (
            <option key={category.category_id} value={category.category_id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
          <input
            type="date"
            className="w-full mt-1 p-1 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
          <input
            type="date"
            className="w-full mt-1 p-1 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Required Skills (comma-separated)</label>
        <input
          type="text"
          className="w-full mt-1 p-1 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
          value={requiredSkills}
          onChange={(e) => setRequiredSkills(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Image</label>
        <input
          type="file"
          accept="image/*"
          className="w-full mt-1 p-1 border rounded-md focus:outline-none focus:ring focus:ring-[#0d3656]"
          onChange={(e) => setProjectImage(e.target.files[0])}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className={`px-3 py-1 bg-gradient-to-r from-[#152c5a] to-[#1e4d8b]  text-white rounded-md hover:bg-[#092c4a] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Creating...' : 'Create Project'}
        </button>
      </div>
    </form>
  </div>
</div>

        </>
    );
}

export default CreateProjectModal;