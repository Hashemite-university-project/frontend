import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/DashboadLayouts/DashbordLayout'
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [courses, setCourses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        major: '',
        about_me: '',
        university_name: '',
        skills: [],
        links: [],
        cv: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:8000/user/profilePage`, { withCredentials: true });

                setUser(userResponse.data.user);
                setProjects(userResponse.data.projects);
                setCourses(userResponse.data.courses);
                setFormData({
                    user_name: userResponse.data.user.user_name,
                    major: userResponse.data.user.major,
                    about_me: userResponse.data.user.about_me,
                    university_name:userResponse.data.user.university_name,
                    skills: userResponse.data.user.skills,
                    links: userResponse.data.user.user_link,
                    cv: null,
                });
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const form = new FormData();
        form.append('user_name', formData.user_name);
        form.append('major', formData.major);
        form.append('about_me', formData.about_me);
        form.append('university_name', formData.university_name);
        form.append('cv', formData.cv);
    
        formData.skills.forEach((skill, index) => {
            form.append(`skills[${index}]`, skill);
        });
    
        formData.links.forEach((linkObj, index) => {
            form.append(`links[${index}][link_name]`, linkObj.link_name);
            form.append(`links[${index}][link]`, linkObj.link);
        });
    
        try {
            await axios.post('http://localhost:8000/api/update-profile', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Profile updated successfully!');
            setIsModalOpen(false);
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    const handleSkillChange = (index, value) => {
        setFormData(prev => {
            const updatedSkills = [...prev.skills];
            updatedSkills[index] = value;
            return { ...prev, skills: updatedSkills };
        });
    };

    const addSkill = () => {
        setFormData({ ...formData, skills: [...formData.skills, ''] });
    };
    
    const removeSkill = (index) => {
        const updatedSkills = formData.skills.filter((_, i) => i !== index);
        setFormData({ ...formData, skills: updatedSkills });
    };
    
    const handleFileChange = (e) => {
        setFormData({ ...formData, cv: e.target.files[0] });
    };

    const handleLinkChange = (index, property, value) => {
        const updatedLinks = [...formData.links];
        updatedLinks[index] = { ...updatedLinks[index], [property]: value };
        setFormData({ ...formData, links: updatedLinks });
    };
    
    const addLink = () => {
        setFormData({ ...formData, links: [...formData.links, { link_name: '', link: '' }] });
    };
    
    const removeLink = (index) => {
        const updatedLinks = formData.links.filter((_, i) => i !== index);
        setFormData({ ...formData, links: updatedLinks });
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <DashboardLayout>
            <main className="p-4 md:ml-64 h-auto">
            <div className="bg-gray-50">
                <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex flex-col items-center">
                        <img
                            src={user.user.user_img}
                            alt="Profile"
                            className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                        />
                        <h1 className="text-xl font-bold">{user.user.user_name}</h1>
                        <p className="text-gray-700">{user.major}</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                        >
                             Update
                        </button>
                            <Link
                            to={`${user.user_cv}`}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                            >
                            Download Resume
                            </Link>
                        </div>
                        </div>
                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                    <h2 className="text-xl font-bold mb-4">Update Profile</h2>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                value={formData.user_name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Major</label>
                                            <input
                                                type="text"
                                                name="major"
                                                value={formData.major}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">University name</label>
                                            <input
                                                type="text"
                                                name="university_name"
                                                value={formData.university_name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">About Me</label>
                                            <textarea
                                                name="about_me"
                                                value={formData.about_me}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                                rows="4"
                                            ></textarea>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Skills</label>
                                            {user.skills.map((skill, index) => (
                                                <div key={index} className="flex items-center mb-2">
                                                    <input
                                                        type="text"
                                                        value={skill.skill_name}
                                                        onChange={(e) => handleSkillChange(index, e.target.value)}
                                                        className="w-full px-4 py-2 border rounded"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSkill(index)}
                                                        className="ml-2 text-red-500 hover:text-red-700"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={addSkill}
                                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded mt-2"
                                            >
                                                Add Skill
                                            </button>
                                        </div>
                                        <div className="mb-4">
                            <label className="block text-gray-700">Links</label>
                            {user.user_link.map((linkObj, index) => (
                                <div key={index} className="flex flex-col gap-2 mb-2">
                                    <input
                                        type="text"
                                        placeholder="Link Name (e.g., LinkedIn)"
                                        value={linkObj.link_name}
                                        onChange={(e) => handleLinkChange(index, 'link_name', e.target.value)}
                                        className="w-full px-4 py-2 border rounded"
                                    />
                                    <input
                                        type="text"
                                        placeholder="URL (e.g., https://linkedin.com/in/username)"
                                        value={linkObj.link}
                                        onChange={(e) => handleLinkChange(index, 'link', e.target.value)}
                                        className="w-full px-4 py-2 border rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeLink(index)}
                                        className="text-red-500 hover:text-red-700 mt-1"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addLink}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded mt-2"
                            >
                                Add Link
                            </button>
                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-700">{user.about_me}</p>
                        <h3 className="font-semibold text-center mt-3 -mb-2">
                        Find me on
                        </h3>
                        <div className="flex justify-center items-center gap-6 my-6">
                        {user.user_link.map((link, index) => (
                            <Link
                                key={index}
                                className="text-gray-700 hover:text-blue-600"
                                to={`/${link.link}`}
                                target="_blank"
                            >
                            {link.link_name}
                            </Link>
                        ))}
                        </div>
                        <div className="flex flex-col">
                        <span className="text-xl font-bold mt-6 mb-4">
                            Skills
                        </span>
                        <ul>
                            {user.skills.map((skill, index) => (
                            <li key={index} className="mb-2">{skill.skill_name}</li>
                            ))}
                        </ul>
                        </div>
                        <hr className='border-t-4'/>
                        <h2 className="text-xl font-bold mt-6 mb-4">Projects</h2>
                        {projects.map((project, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold">{project.project_name}</span>
                            <p>
                            <span className="text-gray-700">
                                {new Date(project.start_date).toLocaleDateString()} - {new Date(project.end_date).toLocaleDateString()}
                            </span>
                            </p>
                            </div>
                            <p className="mt-2 text-xs">
                                {project.project_description.length > 350 
                                    ? `${project.project_description.slice(0, 350)}...` 
                                    : project.project_description}
                            </p>
                            <span className="text-gray-700 mr-2 text-sm">
                            Instructor: {project.instructor.instructor.user_name}
                            </span>
                        </div>
                        ))}
                        <hr className='border-t-4'/>
                        <h2 className="text-xl font-bold mt-6 mb-4">Courses</h2>
                        {courses && courses.map((course, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold">{course.course.course_name}</span>
                            </div>
                            <p className="mt-2 text-xs">
                                {course.course.course_description.length > 350 
                                    ? `${course.course.course_description.slice(0, 350)}...` 
                                    : course.course.course_description}
                            </p>
                            <span className="text-gray-700 mr-2 text-sm">
                            Instructor: {course.course.course_instructor}
                            </span>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>
        </DashboardLayout>
    )
}

export default Profile