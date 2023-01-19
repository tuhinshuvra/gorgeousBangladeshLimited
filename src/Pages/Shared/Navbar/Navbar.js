import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo/gbl-logo.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active  fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  fw-bold" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  fw-bold" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  fw-bold" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  fw-bold" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;