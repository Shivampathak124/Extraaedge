import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaHeart, 
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const UserProfile = ({ user, onDelete, onSave }) => {
  const avatarUrl = `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`;
  const [liked, setLiked] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleLike = () => {
    setLiked(!liked); 
  };

  const handleEdit = () => {
    setIsEditModalOpen(true); 
  };

  const handleDelete = () => {
    
    const confirmDelete = window.confirm(`Are you sure you want to delete ${user.name}?`);
    if (confirmDelete) {
      onDelete(user.id); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    
    onSave(editedUser); 
    setIsEditModalOpen(false); 
  };

  return (
    <div className="user-profile">
      <img
        src={avatarUrl}
        alt={`${user.username}'s avatar`}
        className="avatar"
      />
      <h2>{user.name}</h2>
      <p>
        <FaEnvelope /> {user.email}
      </p>
      <p>
        <FaPhone /> {user.phone}
      </p>
      <p>
        <FaGlobe />{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
      <div className="user-actions">
        <button className={`btn ${liked ? "liked" : ""}`} onClick={handleLike}>
          <FaHeart className={liked ? "liked" : ""} />
        </button>
        <button className="btn" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button className="btn" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Basic Modal</h3>

            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={editedUser.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Website:
              <input
                type="text"
                name="website"
                value={editedUser.website}
                onChange={handleChange}
              />
            </label>

            <div className="modal-actions">
              <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
              <button onClick={handleSave}>Ok</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
