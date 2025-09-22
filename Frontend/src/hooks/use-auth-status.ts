
'use client';

import { useState, useEffect } from 'react';

// Mock User type
export type User = {
  email?: string | null;
  displayName?: string | null;
  isLoggedIn: boolean;
};

export function useAuthStatus() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This hook should only run on the client
    if (typeof window === 'undefined') {
      return;
    }
    
    // Simulate checking auth state
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const parsedUser = JSON.parse(userJson);
        if (parsedUser.isLoggedIn) {
          setUser(parsedUser);
        }
      } catch (e) {
        setUser(null);
      }
    }
    setIsLoading(false);
  }, []);

  return { user, isLoading };
}
