import React from 'react';
import { Metadata } from 'next';
import getAllLocations from '../services/GET/getAllLocations';
import Header from './global/Header';
import Hero from './components/Home';

export const metadata: Metadata = {
  title: 'Explore Hotels',
  description: 'View Our Hotels',
};

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