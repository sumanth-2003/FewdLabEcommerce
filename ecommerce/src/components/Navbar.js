import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SumMarket</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productlist" className="nav-link">products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/wheather" className="nav-link">wheather</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactus" className="nav-link">ContactUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Logout</NavLink>
                        </li>
                    </ul>
                    sumanth
                </div>
            </div>
        </nav>
    );
}

export default Navbar
