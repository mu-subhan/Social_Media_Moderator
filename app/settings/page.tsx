'use client';
import React, { useState } from 'react';

const SettingsPage = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState('Public');

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleSaveChanges = () => {
    // Handle saving changes
    console.log('Changes saved');
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-700">Settings</h1>
      <p className="text-center mb-6 text-gray-700">Customize your account settings and preferences here.</p>

      {/* Profile Settings */}
      <section className="bg-blue-50 p-6 shadow-lg rounded-lg mb-6 border border-blue-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Profile Settings</h2>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={profilePicture ? URL.createObjectURL(profilePicture) : 'https://via.placeholder.com/100'}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-400"
          />
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="mb-2 border rounded-lg py-2 px-4"
            />
            <p className="text-gray-600">Upload a new profile picture.</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-lg font-semibold text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-lg font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </section>

      {/* Account Security */}
      <section className="bg-yellow-50 p-6 shadow-lg rounded-lg mb-6 border border-yellow-200">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600">Account Security</h2>
        <div className="mb-4">
          <label className="block mb-1 text-lg font-semibold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handleSaveChanges}
          className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition duration-300"
        >
          Update Password
        </button>
      </section>

      {/* Notification Preferences */}
      <section className="bg-green-50 p-6 shadow-lg rounded-lg mb-6 border border-green-200">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Notification Preferences</h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="mr-2"
          />
          <label className="text-lg font-semibold text-gray-700">Receive notifications via email</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="mr-2"
          />
          <label className="text-lg font-semibold text-gray-700">Receive notifications via SMS</label>
        </div>
      </section>

      {/* Privacy Settings */}
      <section className="bg-purple-50 p-6 shadow-lg rounded-lg mb-6 border border-purple-200">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Privacy Settings</h2>
        <div className="mb-4">
          <label className="block mb-1 text-lg font-semibold text-gray-700">Profile Visibility</label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Public">Public</option>
            <option value="Friends">Friends</option>
            <option value="Only Me">Only Me</option>
          </select>
        </div>
        <p className="text-gray-600">Choose who can see your profile and posts.</p>
      </section>

      <button
        onClick={handleSaveChanges}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 block mx-auto"
      >
        Save Changes
      </button>
    </div>
  );
};

export default SettingsPage;
