import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Download, Phone, Mail, Book, Award } from 'lucide-react';
import { toast } from 'react-toastify';

// Utility function to format dates
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for View Modal
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  // State for Delete Confirmation Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  // Function to fetch students from the API
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/user/users/1', {
        withCredentials: true, // Include credentials if needed
      });
      if (response.status === 200) {
        setStudents(response.data);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
      const errorMessage =
        error.response?.data?.message || 'Failed to fetch students.';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to handle deleting a student
  const handleDeleteStudent = async () => {
    if (!studentToDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:8000/user/users/${studentToDelete.user_id}`,
        { withCredentials: true } // Include credentials if needed
      );
      if (response.status === 200 || response.status === 204) {
        toast.success('Student deleted successfully!', {
          position: 'top-right',
          autoClose: 5000,
        });
        // Remove the deleted student from the state
        setStudents(
          students.filter(
            (student) => student.user_id !== studentToDelete.user_id
          )
        );
        setIsDeleteModalOpen(false);
        setStudentToDelete(null);
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      const errorMessage =
        error.response?.data?.message || 'Failed to delete student.';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
      });
      setIsDeleteModalOpen(false);
      setStudentToDelete(null);
    }
  };

  // Function to open view modal with selected student
  const openViewModal = (student) => {
    setCurrentStudent(student);
    setIsViewModalOpen(true);
  };

  // Function to open delete confirmation modal
  const openDeleteModal = (student) => {
    setStudentToDelete(student);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#152c5a]">Students</h1>

      {/* Students Table */}
      {loading ? (
        <p>Loading students...</p>
      ) : students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className='bg-gradient-to-r from-[#152c5a] to-[#1e4d8b] text-white'>
              <tr>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">ID</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">Name</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">Email</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">Phone Number</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">Major</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">Skills</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">Created At</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.user_id} className="text-center">
                  <td className="py-2 px-4 border-b">{student.user_id}</td>
                  <td className="py-2 px-4 border-b">
                    {student.user.user_name}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {student.user.user_email}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {student.user.phone_number || 'N/A'}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {student.major || 'N/A'}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {student.skills || 'N/A'}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {formatDate(student.createdAt)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => openViewModal(student)}
                      className="mr-2 px-3 py-1 bg-gradient-to-r from-[#152c5a] to-[#1e4d8b] text-white text-white rounded hover:bg-gradient-to-r from-[#1e4d8b] to-[#152c5a] text-white"
                    >
                      View
                    </button>
                    <button
                      onClick={() => openDeleteModal(student)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View Student Modal */}
      {isViewModalOpen && currentStudent && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl m-4 max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white px-6 py-4 border-b flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#152c5a]">Student Profile</h2>
                <button
                  onClick={() => setIsViewModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#152c5a] to-[#1e4d8b] flex items-center justify-center">
                    <span className="text-2xl font-medium text-white">
                      {currentStudent.user.user_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {currentStudent.user.user_name}
                    </h3>
                    <p className="text-gray-500">Student ID: {currentStudent.user_id}</p>
                  </div>
                </div>

                {/* Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Contact Information</h4>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        {currentStudent.user.user_email}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        {currentStudent.user.phone_number || 'N/A'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Academic Information</h4>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-600">
                        <Book className="w-4 h-4 mr-2 text-gray-400" />
                        Major: {currentStudent.major || 'N/A'}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Award className="w-4 h-4 mr-2 text-gray-400" />
                        Skills: {currentStudent.skills || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Additional Information</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-gray-600">
                      <span className="font-medium">University:</span> {currentStudent.university_name || 'N/A'}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Enrolled Courses:</span> {currentStudent.enrolled_courses || 'N/A'}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Joined Projects:</span> {currentStudent.joined_projects || 'N/A'}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">About Me:</span> {currentStudent.about_me || 'N/A'}
                    </p>
                  </div>
                </div>

                {/* CV Section */}
                {currentStudent.user_cv && (
                  <div className="flex justify-center">
                    <a
                      href={currentStudent.user_cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-[#152c5a] text-white hover:bg-[#1e4d8b] transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && studentToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>
              Are you sure you want to delete{' '}
              <strong>{studentToDelete.user.user_name}</strong>?
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteStudent}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentsList;