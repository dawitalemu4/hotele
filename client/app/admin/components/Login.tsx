import React, { useState } from 'react';
import checkCredentials from '../../../services/GET/checkCredentials';

interface LoginProps {
    updateLoginState: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ updateLoginState }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async () => {
        const res = await checkCredentials(username, password);
        if (res) {
            const confirmedUsername = res.username;
            const confirmedPassword = res.password;
            updateLoginState(confirmedUsername, confirmedPassword);
        } else {
            const error = document.getElementById('LoginErrorContainer');
            error.style.display = 'flex';
            setTimeout(() => {
                error.style.display = 'none';
            }, 3000);
        }
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    
    return ( 
        <div id='Login'>
            <div id="LoginContainer">
                <div id="LoginHeaderContainer">
                    <p id="HeaderLogin">Admin Login</p>
                </div>
                <div id="LoginInputContainer">
                    <input id="LoginInput" type="text" placeholder="Username" onChange={updateUsername} />
                    <input id="LoginInput" type="password" placeholder="Password" onChange={updatePassword} />
                </div>
                <div id="LoginButtonContainer">
                    <button id="LoginButton" onClick={handleFormSubmit}>Login</button>
                </div>
                <div id="LoginErrorContainer">
                    <p id="LoginError">Incorrect Credentials</p>
                </div>
            </div>
            <style>
                {`
                    #Login {}
                    #LoginErrorContainer {
                        display: none;
                        position: relative;
                        color: red;
                    }
                `}
            </style>
        </div>
    )
}

export default Login;