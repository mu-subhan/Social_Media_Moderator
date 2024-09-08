import React from 'react';

const Activity = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Recent Activity</h2>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-lg text-gray-600">
          Stay updated with your recent activities and interactions here.
        </p>
        {/* Placeholder for activities */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-gray-700">Recent Actions</h3>
          <ul className="list-disc list-inside mt-2">
            <li className="text-gray-600">Action 1: Description of action.</li>
            <li className="text-gray-600">Action 2: Description of action.</li>
            <li className="text-gray-600">Action 3: Description of action.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;
