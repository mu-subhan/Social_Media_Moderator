import React from 'react';

const ProfilePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p className="mb-4">Update your profile information and view your details.</p>
      {/* Profile details */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Your Information</h2>
        <p className="mt-2">Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default ProfilePage;
