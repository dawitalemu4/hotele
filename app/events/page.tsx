import React from 'react';
import getAllEvents from '@/services/getAllEvents';
import Hero from './components/Hero';

export default async function Events() {

  const events = await getAllEvents();

  return (
    <html>
      <body>
        <Hero events={events} />
      </body>
    </html>
  )
}