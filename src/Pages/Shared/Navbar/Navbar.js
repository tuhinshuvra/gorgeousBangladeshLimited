import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo/gbl_small_logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-success   border-0  mx-lg-1 fw-bold nav_btn" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-success border-0  mx-lg-1 fw-bold nav_btn" to="/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-success border-0  mx-lg-1  fw-bold nav_btn" to="/about">AboutUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-success border-0  mx-lg-1  fw-bold nav_btn" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;