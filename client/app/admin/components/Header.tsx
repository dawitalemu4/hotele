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
        <div>
            
        </div>
    )
}

export default Header;