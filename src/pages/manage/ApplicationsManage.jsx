import { useState, useEffect } from "react";
import axios from "axios";

const ApplicationsManage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch applications on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("https://cozycare-backend-g56w.onrender.com/applications");
        setApplications(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch applications.");
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        // Send DELETE request to backend
        await axios.delete(`https://cozycare-backend-g56w.onrender.com/applications/${id}`);
        
        setApplications((prevApplications) =>
          prevApplications.filter((app) => app.id !== id)
        );
        alert("Application deleted successfully!");
      } catch (err) {
        console.error("Error deleting application:", err);
        alert("Failed to delete the application. Please try again.");
      }
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading applications...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Applications Management</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">Career ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Attachment</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Actions</th> {/* Added actions column */}
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr
                key={app.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="border px-4 py-2 text-center">{app.id}</td>
                <td className="border px-4 py-2 text-center">{app.user_id}</td>
                <td className="border px-4 py-2 text-center">{app.career_id}</td>
                <td className="border px-4 py-2 text-center">{app.name}</td>
                <td className="border px-4 py-2 text-center">{app.email}</td>
                <td className="border px-4 py-2 text-center">
                  {app.attachment ? (
                    <a
                      href={`https://cozycare-backend-g56w.onrender.com/download/${encodeURIComponent(app.attachment)}`}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Attachment
                    </a>
                  ) : (
                    "No attachment"
                  )}
                </td>
                <td className="border px-4 py-2 text-center">
                  {new Date(app.created_at).toLocaleString()}
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    Delete
                  </button>
                </td> {/* Added Delete button */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsManage;
