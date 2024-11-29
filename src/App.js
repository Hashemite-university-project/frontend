// src/App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import EnrolledProjects from './pages/Student/Projects/EnrolledProjects';
import ViewProject from './components/Projects/ViewProject';
import AllCourses from './pages/Student/Courses/AllCourses';
import EnrolledCourses from './pages/Student/Courses/EnrolledCourses';
import CourseDetails from './pages/Student/Courses/CourseDetails';
import InstructorCourses from './pages/Instructor/Courses/Index';
import CreateCourse from './pages/Instructor/Courses/Create';
import InstructorProjects from './pages/Instructor/Projects/Index';
import Edit from './pages/Instructor/Courses/Edit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/enrolled-projects"
          element={
            <PrivateRoute>
              <EnrolledProjects />
            </PrivateRoute>
          }
        />
        <Route
          path="/enrolled-projects/:id"
          element={
            <PrivateRoute>
              <ViewProject />
            </PrivateRoute>
          }
        />

        {/* Courses Routes */}
        <Route
          path="/available-courses"
          element={
            <PrivateRoute>
              <AllCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/enrolled-courses"
          element={
            <PrivateRoute>
              <EnrolledCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <PrivateRoute>
              <CourseDetails />
            </PrivateRoute>
          }
        />
        {/* insryuctor routes */}
        <Route
          path="/instructor/projects"
          element={
            <PrivateRoute>
              <InstructorProjects />
            </PrivateRoute>
          }
        />
        <Route
          path="/instructor/courses"
          element={
            <PrivateRoute>
              <InstructorCourses />
            </PrivateRoute>
          }
        />        
        <Route
          path="/instructor/create/course"
          element={
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          }
        />
         <Route
          path="/Instructor/Courses/Edit"
          element={
            <PrivateRoute>
              <Edit />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;