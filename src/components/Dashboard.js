import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminDashboard from '../pages/Admin/Dashboard';
import InstructorDashboard from '../pages/Instructor/Dashboard';
import StudentDashboard from '../pages/Student/Dashboard';

function Dashboard() {
    const dispatch = useDispatch();
    const { role } = useSelector((state) => state.auth);
    const { user, token } = useSelector((state) => state.auth);
  return (

    <div>
        {role === 1 && <StudentDashboard />}
        {role === 2 && <InstructorDashboard />}
        {role === 3 && <AdminDashboard />}
    </div>
  )
}

export default Dashboard