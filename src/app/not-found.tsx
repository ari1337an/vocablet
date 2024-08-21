import React from 'react';
import ExclamationIcon from './_icons/exclamation';

export default function NotFound() {
  return (
    <main className='min-h-screen h-full flex flex-col items-center justify-center gap-y-5 p-5'>
      <ExclamationIcon className='w-20 h-20 text-red-500' />
      <h1 className='text-3xl font-bold'>404 - Page Not Found</h1>
      <p className='text-lg'>
        The page you are looking for doesn&apos;t exist. Please check the URL and try again.
      </p>
    </main>
  );
}
