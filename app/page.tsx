import React from 'react';
import getAllLocations from '@/services/getAllLocations';
import Header from './global/Header';
import Hero from './components/Hero';

export default async function Home() {

  const hotels = await getAllLocations();

  return (
    <html>
      <body>
        <Header />
        <Hero hotels={hotels} />
      </body>
    </html>
  )  
}