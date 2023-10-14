import React from 'react';
import { Metadata } from 'next';
import getLocationByID from '../../services/GET/getHotelByID';
import Header from '../global/Header';
import Hero from './components/Hotel';

export const metadata: Metadata = {
  title: 'View Hotel',
  description: 'View Hotel',
};

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