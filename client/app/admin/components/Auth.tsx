'use client'
import React, { useState, useEffect } from 'react';
import checkCredentials from '../../../services/GET/checkCredentials';
import Header from './Header';
import Login from './Login';
import New from './New';
import Update from './Update';

export default function Auth() {

    // pushing my console logs so its easier to explain step by step in the future

    const [loggedIn, setLoggedIn] = useState(false);
    const [showUpdatePage, setShowUpdatePage] = useState(true);


    const createToken = (username: string, password: string) => { 
      console.log('creating token: ', username, password);       
      const token = localStorage.getItem('auth');
      if (token) {
          console.log('removing token: ', token);
          localStorage.removeItem('auth');
          console.log('token removed');
      }
      const tokenArray = [username, password];
      localStorage.setItem('auth', JSON.stringify(tokenArray));
      console.log('token created: ', tokenArray);
    }

    const checkValidity = async (username: string, password: string) => {
      console.log('checking validity: ', username, password);
      const res = await checkCredentials(username, password);
      console.log('res: ', res);
      if (res !== undefined) {
        const resArray = [res.username, res.password];
        console.log('resArray: ', resArray);
        const token = localStorage.getItem('auth');
        console.log('checking if token exists: ', token);
        if (token) {
          console.log('token exists: ', token);
          const existingToken = [token[0], token[1]];
          console.log('existing token in array format: ', existingToken);
          if (resArray == existingToken) {
            setLoggedIn(true);
            console.log('token matches');
            return true;
          } else {
            console.log('token does not match');
            createToken(username, password);
          }
        }
        console.log('token does not exist but res is not undefined. res: ', res);
        createToken(username, password);
        console.log('token created. ', localStorage.getItem('auth'));
        setLoggedIn(true);
        return true;
      } else {
        console.log('res is undefined');
        return undefined;
      }
    }


    const handleShowUpdatePage = () => {
      setShowUpdatePage(true);
    }

    const handleShowNewPage = () => {
      setShowUpdatePage(false);
    }


    useEffect(() => {
      const token = localStorage.getItem('auth');
      console.log('token: ', token);
      if (token) {
        const tokenArray = JSON.parse(token);
        const tokenUsername = tokenArray[0];
        const tokenPassword = tokenArray[1];
        console.log('tokenUsername: ', tokenUsername);
        const executeCheckValidity = async (username: string, password: string) => {
          const res = await checkValidity(username, password);
          console.log('checking res validity: ', res);
          if (res === true) {
            console.log('res is true');
            setLoggedIn(true);
          } 
        }
        executeCheckValidity(tokenUsername, tokenPassword);
      }
    }, [loggedIn, setLoggedIn])
        
    return (
      <div>
          {loggedIn ? <Header showNewPage={handleShowNewPage} showUpdatePage={handleShowUpdatePage} /> : <Login updateLoginState={(username, password) => checkValidity(username, password)} /> }
          {loggedIn ? ( showUpdatePage ? <Update /> : <New /> ) : null }
      </div>
    )
}