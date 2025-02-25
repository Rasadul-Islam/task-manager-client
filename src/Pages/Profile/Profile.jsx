import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        photoURL: user?.photoURL || "",
        name: user?.displayName || "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditClick = () => {
        Swal.fire({
            icon: "info",
            title: "Feature is coming soon",
            showConfirmButton: false,
            timer: 2000,
        });
    };

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-4xl text-center text-teal-500 mt-10">Profile</h2>
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
                {isEditing ? (
                    <div className="flex flex-col gap-4">
                        <label>
                            <strong>Photo URL:</strong>
                            <input
                                className="border p-2 w-full rounded mt-1"
                                type="url"
                                name="photoURL"
                                value={updatedData.photoURL}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <strong>Name:</strong>
                            <input
                                className="border p-2 w-full rounded mt-1"
                                type="text"
                                name="name"
                                value={updatedData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <strong>Phone:</strong>
                            <input
                                className="border p-2 w-full rounded mt-1"
                                type="text"
                                name="phone"
                                value={updatedData.phone}
                                onChange={handleChange}
                            />
                        </label>
                        <div className="flex gap-4 mt-4">
                            <button className="bg-teal-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
                            <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 items-center">
                        <img
                            src={user?.photoURL || "https://i.ibb.co/61HT020/default-avatar.png"}
                            alt={user?.displayName || "User"}
                            className="w-32 h-32 rounded-full border-2 border-teal-500"
                        />
                        <p><strong>Name:</strong> {user?.displayName || "N/A"}</p>
                        <p><strong>Email:</strong> {user?.email || "N/A"}</p>
                        <p><strong>Phone:</strong> {updatedData.phone || "Not set"}</p>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded" onClick={handleEditClick}>Edit Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
