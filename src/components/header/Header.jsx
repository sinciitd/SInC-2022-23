import React from 'react'
import "./Header.css";
import logo from "./logo.png"

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-blue shadow">
                <img className="logo" alt='logo' src={logo} width='50px' height='50px'></img>
                <a className="navbar-brand" href="google.com">Student Incubation Cell</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="google.com">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="google.com">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="google.com">About Us</a>
                        </li>
                        <div className='vertical-line'></div>
                        <li className="nav-item">
                            <a className="nav-link" href="google.com">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="google.com">Register</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>

    )
}

export default Header