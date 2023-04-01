import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../../../assets/images/logo/gbl_small_logo.png';
import '../Navbar/Navbar.css';

const Footer = () => {
    return (
        <div className="container footer_bg">
            <footer className="pt-4">
                <div className="row">

                    <div className="col-12 col-md-4 mb-3 d-flex  flex-column justify-content-center align-items-center">
                        <div className=' d-flex justify-content-center'>
                            <Link to="/"> <img className='' src={FooterLogo} alt="" /></Link>
                        </div>
                        <h5 className='text-center mt-2'>We build quality</h5>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <div className=''>
                            <h5 className='fw-bold text-center '>Services</h5>
                            <ul className="nav flex-column ">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 nav_btn fw-bold text-center">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 nav_btn fw-bold text-center">Product</Link></li>
                                <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 nav_btn fw-bold text-center">Sevices</Link></li>
                                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 nav_btn fw-bold text-center">About</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5 className='fw-bold text-center'>Hot Link</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 nav_btn fw-bold text-center">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 nav_btn fw-bold text-center">Product</Link></li>
                            <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 nav_btn fw-bold text-center">Sevices</Link></li>
                            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 nav_btn fw-bold text-center">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5 className=' fw-bold text-center'>Legal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 nav_btn fw-bold text-center">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 nav_btn fw-bold text-center">Product</Link></li>
                            <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 nav_btn fw-bold text-center">Sevices</Link></li>
                            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 nav_btn fw-bold text-center">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5 className=' fw-bold text-center'>Legal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 nav_btn fw-bold text-center">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 nav_btn fw-bold text-center">Product</Link></li>
                            <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 nav_btn fw-bold text-center">Sevices</Link></li>
                            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 nav_btn fw-bold text-center">About</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className=" d-flex justify-content-center my-2">
                    <div className=" ">
                        <a href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        <a href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current mx-2"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current "><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    </div>
                </div>

                <div className=" ">
                    <p className=' text-center mb-0 copyright_text'> <small>Copyright @ 2023, All right reserved by Gorgeous Bangladesh Ltd</small></p>
                </div>
            </footer >
        </div >
    );
};

export default Footer;