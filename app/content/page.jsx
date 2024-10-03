import React from 'react';

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Users List</h1>
        <ul className='space-y-4'>
          {users.map((user) => (
            <li
              key={user.id}
              className='flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow duration-300'
            >
              <div>
                <h2 className='font-semibold text-gray-700'>{user.name}</h2>
                <p className='text-gray-500'>{user.email}</p>
              </div>
              <button className='text-blue-500 hover:underline'>View Profile</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
