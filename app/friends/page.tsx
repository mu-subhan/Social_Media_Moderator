import React from 'react';

const friends = [
  {
    name: 'Friend 1',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    details: 'Details about the first friend.',
  },
  {
    name: 'Friend 2',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    details: 'Details about the second friend.',
  },
  // Add more friends as needed
];

const FriendsPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Friends</h1>
      <p className="mb-6 text-gray-700">Manage your friends list and see friend suggestions.</p>
      {/* Friends list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={friend.image}
                alt={friend.name}
                className="w-16 h-16 object-cover rounded-full border-2 border-blue-400"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{friend.name}</h2>
                <p className="mt-1 text-gray-600">{friend.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
