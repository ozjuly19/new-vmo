"use client"

import React, { useState, useEffect } from 'react';
import NavigationHeader from './component/NavigationFooter';
import LoadingScreen from './component/LoadingScreen';
import ClipsPage from './component/ClipsPage';

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className='overflow-hidden'>
      {
        isLoading ? <LoadingScreen loadingText='Loading...' /> : <>
          <ClipsPage />
          <NavigationHeader />
        </>
      }
    </main>
  );
}

export default Page;