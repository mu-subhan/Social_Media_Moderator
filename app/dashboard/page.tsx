'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaBell, FaEnvelope, FaUser } from 'react-icons/fa'; // Import icons

const DashboardPage = () => {
  const [posts, setPosts] = useState<{ content: string; image?: string }[]>([]);
  const [newPost, setNewPost] = useState('');
  const [newImage, setNewImage] = useState<File | null>(null);
  const router = useRouter();

  const handlePostSubmit = () => {
    if (newPost.trim() !== '') {
      const imageUrl = newImage ? URL.createObjectURL(newImage) : undefined;
      setPosts([{ content: newPost, image: imageUrl }, ...posts]);
      setNewPost('');
      setNewImage(null);
    }
  };

  const handlePostClick = (post: { content: string }) => {
    router.push(`/posts/${post.content}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <header className="w-full p-4 bg-blue-600 text-white shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaSearch className="text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded text-slate-900 bg-white"
          />
        </div>
        <div className="text-2xl font-bold">Socioyy</div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-xl cursor-pointer hover:text-gray-300" />
          <FaBell className="text-xl cursor-pointer hover:text-gray-300" />
          <FaUser className="text-xl cursor-pointer hover:text-gray-300" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-1/4 h-full p-4 bg-white shadow-md overflow-y-auto">
          <ul>
            {['My Posts', 'Activity', 'Sports', 'Friends', 'Profile', 'Settings'].map((item) => (
              <li
                key={item}
                className="mb-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                onClick={() => router.push(`/${item.toLowerCase()}`)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex flex-col flex-1 mx-4 overflow-y-auto">
          {/* Stories Section */}
          <section className="bg-white p-6 shadow-md mb-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Stories</h2>
            <hr className='pb-8'/>
            <div className="flex space-x-6 overflow-x-auto">
              {['https://picsum.photos/200', 'https://picsum.photos/201', 'https://picsum.photos/202'].map((image, index) => (
                <div
                  key={index}
                  className="w-56 h-72 bg-gray-200 rounded-lg shadow-md flex items-center justify-center relative overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Story ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-bold">
                    Story {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Post Section */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 shadow-md rounded-lg mb-4">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg mb-3 bg-white resize-none h-40"
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <div className="flex items-center space-x-4 mb-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewImage(e.target.files ? e.target.files[0] : null)}
                className="border rounded-md py-2 px-4 bg-white"
              />
              <button
                onClick={handlePostSubmit}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-md rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => handlePostClick(post)}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post Image"
                      className="w-full h-48 object-cover mb-2 rounded"
                    />
                  )}
                  <p>{post.content}</p>
                </div>
              ))
            ) : (
              <div className="bg-white p-4 shadow-md rounded-lg">No posts found!</div>
            )}
          </div>
        </main>

        {/* Right Sidebar for Ads or Other Info */}
        <aside className="w-1/4 h-full p-4 bg-white shadow-md overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Sponsored Ads</h2>
          <div className="space-y-4">
            {['https://picsum.photos/300', 'https://picsum.photos/301', 'https://picsum.photos/302'].map((image, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Ad ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold">Ad {index + 1}</p>
                  <p className="text-gray-600">Your promotional content here.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trends Section */}
          <section className="mt-6 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Trends</h2>
            <div className="space-y-4">
              {['Trend 1', 'Trend 2', 'Trend 3'].map((trend, index) => (
                <a
                  key={index}
                  href={`/trends/${index + 1}`}
                  className="block bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={`https://picsum.photos/300?random=${index}`}
                    alt={`Trend ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold">{trend}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default DashboardPage;
