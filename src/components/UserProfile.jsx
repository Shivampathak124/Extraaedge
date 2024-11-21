import React from "react";

const UserProfile = ({ user }) => {
  const avatarUrl = `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`;

  return (
    <div className="user-profile">
    
      <img
        src={avatarUrl}
        alt={`${user.username}'s avatar`}
        className="avatar"
      />
      
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
};

export default UserProfile;
