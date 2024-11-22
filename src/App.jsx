import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, setLoading } from "./redux/actions";

import UserProfile from "./components/UserProfile";
import LoadingSpinner from "./components/LoadingSpinner";

import "./app.css";

const App = () => {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setLoading(true)); 
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch(setUsers(data)); 
      } catch (error) {
        console.error("Error fetching users:", error);
        dispatch(setLoading(false)); 
      }
    };

    fetchUsers();
  }, [dispatch]);


  const handleSaveUser = (updatedUser) => {
  
    dispatch(
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      )
    );
  };

  const handleDeleteUser = (userId) => {
   
    dispatch(setUsers(users.filter((user) => user.id !== userId)));
  };

  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="user-profiles">
          {users.map((user) => (
            <UserProfile
              key={user.id}
              user={user}
              onSave={handleSaveUser} 
              onDelete={handleDeleteUser} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
