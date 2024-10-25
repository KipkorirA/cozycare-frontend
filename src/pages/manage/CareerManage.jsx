import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CareerManage = () => {
    const [careers, setCareers] = useState([]);
    const [filteredCareers, setFilteredCareers] = useState([]);
    const [careerForm, setCareerForm] = useState({
        title: '',
        location: '',
        department: '',
        description: '',
        remote: false,
        apply_link: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [editCareerId, setEditCareerId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetchCareers();
    }, []);

    const fetchCareers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:5000/careers');
            const careerData = Array.isArray(response.data) ? response.data : [];
            setCareers(careerData);
            setFilteredCareers(careerData);
        } catch (error) {
            setError('Failed to fetch careers');
        } finally {
            setLoading(false);
        }
    };

    const handleCareerSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editCareerId) {
                await axios.put(`http://127.0.0.1:5000/careers/${editCareerId}`, careerForm);
                setSuccessMessage('Career updated successfully!');
            } else {
                await axios.post('http://127.0.0.1:5000/careers', careerForm);
                setSuccessMessage('Career created successfully!');
            }

            setCareerForm({ title: '', location: '', department: '', description: '', remote: false, apply_link: '' });
            setEditCareerId(null);
            fetchCareers();
        } catch (error) {
            setError('Error submitting career');
        }
    };

    const handleEditCareer = (career) => {
        setCareerForm(career);
        setEditCareerId(career.id);
    };

    const handleDeleteCareer = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/careers/${id}`);
            setSuccessMessage('Career deleted successfully!');
            fetchCareers();
        } catch (error) {
            setError('Error deleting career');
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = careers.filter((career) =>
            career.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            career.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
            career.department.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredCareers(filtered);
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Manage Careers</h2>

            {/* Back Button */}
            <button
                onClick={handleBack}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded mb-6"
            >
                Back
            </button>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 p-3 w-full rounded mb-6 focus:ring focus:ring-blue-200 focus:outline-none"
            />

            {/* Career Form */}
            <form
                onSubmit={handleCareerSubmit}
                className="space-y-4 bg-white p-6 rounded shadow-md mb-10"
            >
                <input
                    type="text"
                    placeholder="Job Title"
                    value={careerForm.title}
                    onChange={(e) => setCareerForm({ ...careerForm, title: e.target.value })}
                    required
                    className="border border-gray-300 p-3 w-full rounded focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={careerForm.location}
                    onChange={(e) => setCareerForm({ ...careerForm, location: e.target.value })}
                    required
                    className="border border-gray-300 p-3 w-full rounded focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={careerForm.department}
                    onChange={(e) => setCareerForm({ ...careerForm, department: e.target.value })}
                    required
                    className="border border-gray-300 p-3 w-full rounded focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <textarea
                    placeholder="Description"
                    value={careerForm.description}
                    onChange={(e) => setCareerForm({ ...careerForm, description: e.target.value })}
                    required
                    className="border border-gray-300 p-3 w-full rounded focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <label className="block text-sm text-gray-600">
                    <input
                        type="checkbox"
                        checked={careerForm.remote}
                        onChange={(e) => setCareerForm({ ...careerForm, remote: e.target.checked })}
                        className="mr-2"
                    />
                    Remote
                </label>
                <input
                    type="url"
                    placeholder="Application Link"
                    value={careerForm.apply_link}
                    onChange={(e) => setCareerForm({ ...careerForm, apply_link: e.target.value })}
                    required
                    className="border border-gray-300 p-3 w-full rounded focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow"
                >
                    {editCareerId ? 'Update Career' : 'Submit Career'}
                </button>
            </form>

            {loading && <p className="text-center text-gray-500">Loading careers...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {successMessage && <p className="text-center text-green-500">{successMessage}</p>}

            {/* Careers List */}
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Current Careers</h3>
            <ul className="space-y-4">
                {filteredCareers.map(career => (
                    <li key={career.id} className="bg-white p-6 rounded shadow-md flex justify-between items-center">
                        <div>
                            <strong className="text-lg text-gray-900">{career.title}</strong>
                            <p className="text-sm text-gray-600">{career.location} - {career.department}</p>
                            <p className="text-sm mt-2 text-gray-500">{career.description}</p>
                            <p className="text-xs mt-1 text-gray-400">
                                {career.remote ? 'Remote' : 'On-site'}
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => handleEditCareer(career)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded shadow"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteCareer(career.id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CareerManage;
