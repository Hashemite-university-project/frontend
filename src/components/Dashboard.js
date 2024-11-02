import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AdminDashboard from '../pages/Admin/Dashboard';
import InstructorDashboard from '../pages/Instructor/Dashboard';
import StudentDashboard from '../pages/Student/Dashboard';
import { fetchUserData } from '../redux/authSlice';

function Dashboard() {
    const dispatch = useDispatch();
    const { role } = useSelector((state) => state.auth);

    useEffect(() => {
   
        dispatch(fetchUserData());
      
    }, [dispatch]);
  return (

    <div>
        {role === 1 && <StudentDashboard />}
        {role === 2 && <InstructorDashboard />}
        {role === 3 && <AdminDashboard />}
    </div>
  )
}

export default Dashboard