import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, setLoading } from "./redux/actions";

import UserProfile from "./components/UserProfile";
import LoadingSpinner from "./components/LoadingSpinner";
import "./app.css"

const App = () => {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data)); // Update users in the store
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        dispatch(setLoading(false)); // Stop loading even if there's an error
      });
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="user-profiles">
          {users.map((user) => (
            <UserProfile key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
