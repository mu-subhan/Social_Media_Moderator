'use client'
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Placeholder for actual auth check logic
    const userAuthenticated = false; // Replace with actual check
    setIsAuthenticated(userAuthenticated);

    if (!userAuthenticated) {
      router.push('/auth');
    } else {
      router.push('/dashboard');
    }
  }, [router]);

  return <div>Loading...</div>;
};

export default Home;
