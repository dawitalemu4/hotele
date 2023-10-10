import React, { useState } from 'react';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);

    const checkCredentials = () => {
        if (username === 'admin' && password === 'admin') {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    const createToken = (username, password) => {
        checkCredentials();
        if (valid) {         
            const token = localStorage.getItem('auth');
            if (token) {
                return;
            }
            const tokenArray = [username, password];
            localStorage.setItem('auth', JSON.stringify(tokenArray));
            window.location.reload();
        } else {
            alert('Invalid username or password!');
        }
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    
    return ( 
        <div>

        </div>
    )
}