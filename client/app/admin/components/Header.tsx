import React from 'react';

interface HeaderProps {
    showUpdatePage: () => void;
    showNewPage: () => void;
}

const Header: React.FC<HeaderProps> = ({ showNewPage, showUpdatePage }) => {

    const handleLogout = () => {
        localStorage.removeItem('auth');
        window.location.reload();
    }

    return (
        <div id='AdminHeader'>
            <div id="AdminHeaderContainer">
                <div id='LeftContainer'>
                    <a id="HomeButton" href='/'>Go Home</a>
                </div>
                <div id="RightContainer">
                    <div id='AdminHeaderButtons'>
                        <div id='NewButton' onClick={showNewPage}>New</div>
                        <div id='UpdateButton' onClick={showUpdatePage}>Update</div>
                        <div id='LogoutButton' onClick={handleLogout}>Logout</div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    #AdminHeader {
                        display: flex;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 99.5vw;
                        height: 10vh;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    #AdminHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        flex-direction: row;
                    }
                    #LeftContainer {
                        display: flex;
                        width: 20%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                    #RightContainer {
                        display: flex;
                        width: 80%;
                        height: 100%;
                        justify-content: flex-end;
                        align-items: center;
                    }
                    #AdminHeaderButtons {
                        display: flex;
                        width: 40%;
                        height: 100%;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                    #NewButton, #UpdateButton, #LogoutButton, #HomeButton {
                        padding: 10px;
                        cursor: pointer;
                        color: white;
                        text-decoration: none;
                    }
                `}
            </style>
        </div>
    )
}

export default Header;