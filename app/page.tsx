"use client";

import React, { useState, useEffect } from 'react';
import DatesNavigation from './component/DatesNavigation'; // Corrected import
import LoadingScreen from './component/LoadingScreen';
import ClipsPage from './component/ClipsPage';

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 50);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <LoadingScreen loadingText='Loading...' />;
  }

  return (
    <main className='overflow-hidden'>
      <ClipsPage />
      <DatesNavigation />
    </main>
  );
}

export default Page;