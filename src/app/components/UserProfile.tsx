import React, { useState, useEffect } from 'react';
import type { UserData } from '../types/projectTypes';

const UserProfile = () => {
  // State ki type UserData ya null ho sakti hai (jab tak data fetch na ho)
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        if (!response.ok) {
          throw new Error('Data fetch nahi ho saka');
        }

        // 💡 Type Assertion: TypeScript ko batana ke data UserData jaisa hai
        const data: UserData = await response.json();
        
        setUser(data);
      } catch (err) {
        // Error handling
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <h2>Loading user data...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Company:</strong> {user?.company.name}</p>
    </div>
  );
};

export default UserProfile;