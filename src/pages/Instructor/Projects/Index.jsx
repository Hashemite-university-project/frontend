import React from 'react'
import DashboardLayout from '../../../components/DashboadLayouts/DashbordLayout'
import ProjectsList from '../../../components/Instructor/Projects/ProjectsList'
import Breadcrumb from '../../../components/Breadcrump'
function Index() {
  return (
    <DashboardLayout>
     <main className="p-4 md:ml-64 h-full pt-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
     <div className="react-wrapper">
          {/* Breadcrumb Section */}
          <div className='my-5'>
            <Breadcrumb pageTitle="My Project List" />
          </div>
          <ProjectsList />
        </div>
      </main>
    </DashboardLayout>
  )
}

export default Index