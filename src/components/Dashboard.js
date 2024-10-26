import React from 'react'
import { useSelector } from 'react-redux';
import AdminDashboard from '../pages/Admin/Dashboard';
import InstructorDashboard from '../pages/Instructor/Dashboard';
import StudentDashboard from '../pages/Student/Dashboard';

function Dashboard() {
    const { role } = useSelector((state) => state.auth);
  return (

    <div>
        {role === 1 && <StudentDashboard />}
        {role === 2 && <InstructorDashboard />}
        {role === 3 && <AdminDashboard />}
    </div>
  )
}

export default Dashboard