'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleAuth = (e: any) => {
    e.preventDefault();
    // Placeholder for authentication logic
    router.push('/dashboard');
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-gray-900"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/1600x900/?classic,background")',
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 w-full max-w-md mx-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          {isLogin ? 'Login to Your Account' : 'Create Your Account'}
        </h2>
        <hr className="border-t-2 border-black my-4" />

        <form onSubmit={handleAuth} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full h-10 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full h-10 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full h-10 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-6 text-sm text-center text-gray-600">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:underline"
              >
                Log in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
