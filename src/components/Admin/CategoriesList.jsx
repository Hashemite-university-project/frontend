import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Utility function to format dates
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for Create Modal
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  // State for Edit Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to fetch categories
  const fetchCategories = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get('http://localhost:8000/category', { withCredentials: true });
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error('There was an error fetching the categories!', error);
      toast.error('Failed to fetch categories.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setLoading(false); // End loading
    }
  };

  // Function to handle creating a new category
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) {
      toast.error('Category name cannot be empty.', {
        position: 'top-right',
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/category',
        { category_name: newCategoryName },
        { withCredentials: true }
      );
      if (response.status === 201) {
        toast.success('Category created successfully!', {
          position: 'top-right',
          autoClose: 5000,
        });
        setIsCreateModalOpen(false);
        setNewCategoryName('');
        fetchCategories(); // Refetch categories after creation
      }
    } catch (error) {
      console.error('Error creating category:', error);
      toast.error('Failed to create category.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  // Function to handle editing a category
  const handleEditCategory = async (e) => {
    e.preventDefault();
    if (!editedCategoryName.trim()) {
      toast.error('Category name cannot be empty.', {
        position: 'top-right',
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/category/${currentCategory.category_id}`,
        { category_name: editedCategoryName },
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success('Category updated successfully!', {
          position: 'top-right',
          autoClose: 5000,
        });
        setIsEditModalOpen(false);
        setCurrentCategory(null);
        setEditedCategoryName('');
        fetchCategories(); // Refetch categories after update
      }
    } catch (error) {
      console.error('Error updating category:', error);
      toast.error('Failed to update category.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  // Function to open edit modal with selected category
  const openEditModal = (category) => {
    setCurrentCategory(category);
    setEditedCategoryName(category.category_name);
    setIsEditModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* Create Category Button */}
      <button
        onClick={() => setIsCreateModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create New Category
      </button>

      {/* Categories Table */}
      {loading ? (
        <p>Loading categories...</p>
      ) : categories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Created At</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.category_id} className="text-center">
                  <td className="py-2 px-4 border-b">{category.category_id}</td>
                  <td className="py-2 px-4 border-b">{category.category_name}</td>
                  <td className="py-2 px-4 border-b">{formatDate(category.createdAt)}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => openEditModal(category)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Create Category Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Create New Category</h2>
            <form onSubmit={handleCreateCategory}>
              <div className="mb-4">
                <label className="block text-gray-700">Category Name</label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {isEditModalOpen && currentCategory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>
            <form onSubmit={handleEditCategory}>
              <div className="mb-4">
                <label className="block text-gray-700">Category Name</label>
                <input
                  type="text"
                  value={editedCategoryName}
                  onChange={(e) => setEditedCategoryName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoriesList;
