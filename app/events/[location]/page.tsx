import React from 'react';
import getEventByLocation from '@/services/getEventByLocation';
import Header from '../../global/Header';
import Hero from './components/Hero';

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