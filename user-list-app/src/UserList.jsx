import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <p className="text-lg text-gray-500">Loading Users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex justify-end p-4">
        <button 
          className="bg-accent text-white px-4 py-2 rounded-lg focus:outline-none"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div className="container mx-auto py-10 px-4 dark:bg-gray-900 relative">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-400 to-indigo-600 animate-background"></div>
        <h2 className="text-4xl font-bold mb-8 text-center text-primary dark:text-white z-10 relative">
          User Directory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
          {listOfUsers.map((user) => (
            <div key={user.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              {/* Random Avatar */}
              <img
                src={`https://i.pravatar.cc/150?u=${user.id}`}
                alt={user.name}
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{user.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">Email: {user.email}</p>
              <p className="text-gray-600 dark:text-gray-300">Phone: {user.phone}</p>
              <div className="mt-4">
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                  {user.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
