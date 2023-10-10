import React, { useState, useEffect } from 'react';
import { Metadata } from 'next';
import Auth from './components/Auth';

export const metadata: Metadata = {
  title: 'Admin Portal',
  description: 'View Our Hotels',
};

export default async function Home() {

  return (
    <html>
      <body>
        <Auth />
      </body>
    </html>
  )  
}