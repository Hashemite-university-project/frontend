import React from 'react'
import DashboardLayout from '../../components/DashboadLayouts/DashbordLayout'
import Chart from 'react-apexcharts'

function Dashboard() {
  const courseProgressOptions = {
    chart: {
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%'
        }
      }
    },
    labels: ['Course Progress']
  }
  
  const courseProgressSeries = [75] // example progress percentage
  
  const projectProgressOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%'
      }
    },
    xaxis: {
      categories: ['Project 1', 'Project 2', 'Project 3']
    }
  }
  
  const projectProgressSeries = [
    {
      name: 'Progress',
      data: [80, 50, 30] // example data for each project
    }
  ]

  return (
    <DashboardLayout>
      <main className="p-4 md:ml-64 h-screen pt-20">
        <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 dark:border-gray-700 px-4 py-6 rounded-lg dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 0110 10h-4a6 6 0 10-12 0H2a10 10 0 0110-10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">12</h2>
              <p className="leading-relaxed dark:text-gray-300">Total Courses</p>
            </div>
          </div>

          {/* Completed Projects Card */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 dark:border-gray-700 px-4 py-6 rounded-lg dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-green-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M9 11l3 3L22 4"></path>
                <path d="M21 12v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">8</h2>
              <p className="leading-relaxed dark:text-gray-300">Completed Projects</p>
            </div>
          </div>

          {/* Active Courses Card */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 dark:border-gray-700 px-4 py-6 rounded-lg dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">5</h2>
              <p className="leading-relaxed dark:text-gray-300">Active Courses</p>
            </div>
          </div>

          {/* Upcoming Deadlines Card */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 dark:border-gray-700 px-4 py-6 rounded-lg dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-red-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3"></path>
                <path d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">3</h2>
              <p className="leading-relaxed dark:text-gray-300">Upcoming Deadlines</p>
            </div>
          </div>

      

          {/* New Progress Tracking Section */}
          <div className="w-full mt-8 grid gap-4 md:grid-cols-2">
            {/* Course Progress Chart */}
            <div className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg dark:bg-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Course Progress</h3>
              <Chart
                options={courseProgressOptions}
                series={courseProgressSeries}
                type="radialBar"
                height={350}
              />
            </div>

            {/* Project Progress Chart */}
            <div className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg dark:bg-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Project Progress</h3>
              <Chart
                options={projectProgressOptions}
                series={projectProgressSeries}
                type="bar"
                height={350}
              />
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}

export default Dashboard