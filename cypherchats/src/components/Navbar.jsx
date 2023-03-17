import React from 'react'
// import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-extended">
            <ul>
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
            </ul>
        </nav>
    )
}
