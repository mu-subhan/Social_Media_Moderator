import React from 'react';

const MyPostsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Posts</h1>
      <p className="mb-4">Here you can view all the posts you've created.</p>
      {/* Example posts */}
      <div className="space-y-4">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Post Title 1</h2>
          <p className="mt-2">This is the content of the first post.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Post Title 2</h2>
          <p className="mt-2">This is the content of the second post.</p>
        </div>
      </div>
    </div>
  );
};

export default MyPostsPage;
