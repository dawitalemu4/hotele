import React from 'react';
import { Metadata } from 'next';
import getEventByLocation from '../../../services/getEventByLocation';
import Header from '../../global/Header';
import Hero from './components/ByLocation';

export const metadata: Metadata = {
  title: 'View Events By Location',
  description: 'View Events By Location',
};

export default async function Event({ params }: { params: { location: string } }) {

  const events = await getEventByLocation(params.location);

  return (
    <html>
      <body>
        <Header />
        <Hero events={events} />
      </body>
    </html>
  )
}