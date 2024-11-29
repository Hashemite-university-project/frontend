import React from 'react'
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout';
import EditCourses from '../../../components/Instructor/Courses/EditCourses';
import Breadcrumb from '../../../components/Breadcrump';

function Edit() {
  return (
    <DashboardLayout>
    <main className="p-4 md:ml-64 h-full pt-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="react-wrapper">
            {/* Breadcrumb Section */}
            <div className='my-5'>
                <Breadcrumb pageTitle="My Courses List" />
            </div>

            {/* Courses List Section */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6">
                <EditCourses />
            </div>
        </div>
    </main>
</DashboardLayout>
  )
}

export default Edit;