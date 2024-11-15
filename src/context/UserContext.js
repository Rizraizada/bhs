// src/context/UserContext.js

import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BASE_URL from '@/components/config/apiConfig';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/auth/verifyToken`, {
          credentials: 'include', // Include cookies in the request
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Assumes response includes user details
        } else {
          setUser(null); // No valid user session
          router.push('/login'); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("User not authenticated:", error);
        setUser(null);
        router.push('/login'); // Redirect to login
      }
    };
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
