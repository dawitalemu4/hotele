import React from 'react';
import { Metadata } from 'next';
import getAllEvents from '../../services/getAllEvents';
import Header from '../global/Header';
import Hero from './components/AllEvents';

export const metadata: Metadata = {
  title: 'Explore Events',
  description: 'View Our Events',
};

export default async function Events() {

  const events = await getAllEvents();

  return (
    <html>
      <body>
        <Header />
        <Hero events={events} />
      </body>
    </html>
  )
}