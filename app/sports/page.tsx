import React from 'react';

const SportsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Sports</h1>
      <p className="mb-6 text-lg text-gray-700">
        Catch up on the latest sports news and updates.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?sports,basketball"
            alt="Basketball"
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Basketball News</h2>
          <p className="mt-2 text-gray-600">
            Latest updates and highlights from the world of basketball.
          </p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?sports,soccer"
            alt="Soccer"
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Soccer News</h2>
          <p className="mt-2 text-gray-600">
            Get the latest scores and updates from the soccer field.
          </p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?sports,tennis"
            alt="Tennis"
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Tennis News</h2>
          <p className="mt-2 text-gray-600">
            Highlights and scores from recent tennis matches.
          </p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?sports,baseball"
            alt="Baseball"
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Baseball News</h2>
          <p className="mt-2 text-gray-600">
            Information and updates on the latest baseball games.
          </p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?sports,running"
            alt="Running"
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Running News</h2>
          <p className="mt-2 text-gray-600">
            Coverage of marathons and running events around the world.
          </p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?sports,gym"
            alt="Gym"
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Gym News</h2>
          <p className="mt-2 text-gray-600">
            Latest trends and tips from the fitness and gym world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
