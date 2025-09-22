
'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import type { User } from './use-auth-status';

export default function useAuthRedirect(redirectTo = '/auth') {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // This hook should only run on the client
    if (typeof window === 'undefined') {
      return;
    }
    
    // Allow guest access by not redirecting if user is not found
    try {
      const userJson = localStorage.getItem('user');
      if (userJson) {
        const parsedUser = JSON.parse(userJson);
        if (parsedUser.isLoggedIn) {
          setUser(parsedUser);
        } else {
          setUser(null);
          router.push(redirectTo);
        }
      } else {
        setUser(null);
        router.push(redirectTo);
      }
    } catch (error) {
       // If localStorage is not available or there is a parsing error
       console.error("Auth check failed:", error);
       setUser(null);
       router.push(redirectTo);
    }
    setIsLoading(false);
  }, [router, redirectTo]);

  return { isLoading, user };
}

export function AuthLoadingSkeleton() {
    return (
        <div className="flex items-center justify-center min-h-dvh w-full bg-muted/40 p-4">
            <div className="w-full max-w-md">
                <Skeleton className="h-[450px] w-full" />
            </div>
        </div>
    );
}

// Re-export User type
export type { User };
