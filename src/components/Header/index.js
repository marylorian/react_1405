import React from "react";
import {Link} from "react-router-dom";
import './styles.css'

const Header = () => {
    return <div className="header">
        <Link to="/">Home</Link>
        <Link to="/chat">Chats</Link>
        <Link to="/profile">Profile</Link>
    </div>
}

export default Header