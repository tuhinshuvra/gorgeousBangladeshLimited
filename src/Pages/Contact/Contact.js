import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className=''>
            <div className="col-lg-12 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-5 text-center text-lg-start">
                        <div className="">
                            <h1 className="text-3xl font-bold mb-2">Get in Touch!</h1>
                            <p className=' fw-bold' >Gorgeous Bangladesh LTD.</p>
                            <p> Valentine Group</p>
                            <p> Corporate Office: </p>
                            <p>MAG House, House No-20, Shah Makhdum</p>
                            <p>Avenue, Uttara Sector -11, Dhaka-1230</p>
                            <p>Website: <Link className=' text-decoration-none' to="www.gbl-bd.com">www.gbl-bd.com</Link> </p>
                            <p>Email: info@gbl-bd.com</p>
                            <p>Facebook: <Link className=' text-decoration-none' to="https://www.facebook.com/GorgeousBangladeshLtd">GorgeousBangladeshLtd</Link>  </p>
                            <p>Phone: +8802 224470053, +8802 224470056</p>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Input full name" />
                                <label htmlFor="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="0123456789" />
                                <label htmlFor="floatingInput">Phone No</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea type="message" className="form-control" id="floatingInput" placeholder="Input message" />
                                <label htmlFor="floatingInput">Message</label>
                            </div>

                            {/* <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div> */}
                            <button className="w-100 btn btn-lg btn-outline-primary" type="submit">Submit</button>
                            {/* <hr className="my-4" /> */}
                            {/* <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;