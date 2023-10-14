import React, { useState } from 'react';
import checkCredentials from '../../../services/GET/checkCredentials';

interface LoginProps {
    updateLoginState: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ updateLoginState }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const handleFormSubmit = async () => {
        const res = await checkCredentials(username, password);
        if (res) {
            const confirmedUsername = res.username;
            const confirmedPassword = res.password;
            updateLoginState(confirmedUsername, confirmedPassword);
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
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
                    {showWarning && <p id="LoginError">Incorrect Credentials</p>}
                </div>
            </div>
            <style>
                {`
                    #Login {
                        display: flex;
                        position: relative;
                        width: 99.5vw;
                        height: 100vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #LoginContainer {
                        display: flex;
                        position: relative;
                        width: 70%;
                        height: 70%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;                    
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 25px;
                    }
                    #LoginHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-family: InterBold;
                        font-size: 30px;
                    }
                    #LoginInputContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 40%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #LoginInput {
                        display: flex;
                        position: relative;
                        width: 80%;
                        height: 20%;
                        border: none;
                        outline: none;
                        margin: 5px;
                        padding: 5px;
                    }
                    #LoginButtonContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                    }
                    #LoginButton {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 50%;
                        justify-content: center;
                        align-items: center;
                        outline: none;
                        border-radius: 5px;
                        font-family: InterBold;
                        font-size: 20px;
                        cursor: pointer;
                    }
                    #LoginErrorContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                        color: red;
                    }
                `}
            </style>
        </div>
    )
}

export default Login;