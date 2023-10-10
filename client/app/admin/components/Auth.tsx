'use client'
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Update from './Update';

const Auth = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('auth');
      if (token) {
        setLoggedIn(true);
      }
    }, []);

    return (
        <div>
            {loggedIn ? <Update /> : <Login /> }
        </div>
    )
}

export default Auth;