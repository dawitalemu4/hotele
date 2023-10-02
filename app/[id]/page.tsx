import React from 'react';
import getLocationByID from '@/services/getLocationByID';
import Header from '../global/Header';
import Hero from './components/Hero';

export default async function Location({ params }: { params: { id: string } }) {

  const hotel = await getLocationByID(params.id);

  return (
    <html>
      <body>
        <Header />
        <Hero hotel={hotel} />
      </body>
    </html>
  )
}