import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact_bg col-lg-12 px-4 py-5" style={{ backgroundColor: '#D0DFFD' }}>
            <div className="row align-items-center g-lg-5 py-lg-5 col-lg-10 mx-auto p-sm-0">
                <div className="col-lg-5 text-center text-lg-start">
                    <div className=" mb-lg-0 mb-4 ">
                        <h1 className="text-3xl font-bold mb-2">Get in Touch!</h1>
                        <h5 className=' mb-0'><b>Gorgeous Bangladesh LTD.</b></h5>
                        <p><b>Valentine Group</b> </p>
                        <p className=' mb-0'><b>Corporate Office:</b></p>
                        <p className=' mb-0'>MAG House, House No-20, Shah Makhdum</p>
                        <p>Avenue, Uttara Sector -11, Dhaka-1230</p>
                        <p className=' mb-0'><b>Website:</b>
                            <Link className=' text-decoration-none' to="/"> www.gbl-bd.com</Link>
                        </p>
                        <p className=' mb-0'><b>Email:</b> info@gbl-bd.com</p>
                        <p className=' mb-0'><b>Facebook:</b>
                            <a className=' text-decoration-none' href="https://www.facebook.com/GorgeousBangladeshLtd" target="_blank" > Gorgeous Bangladesh Ltd</a> <br />
                        </p>
                        <p className=' mb-0'><b>Phone:</b> +8802 224470053, +8802 224470056</p>
                    </div>
                </div>
                <div className="col-lg-6 mx-auto">
                    <form
                        className='d-flex flex-column'
                        action="https://formspree.io/f/mbjelnwv"
                        method="POST">

                        <input type="text"

                            className=' mb-2 form-control'
                            name="username"
                            autoComplete="off"
                            placeholder='Name'
                            required
                        />

                        <input type="text"
                            className=' mb-2 form-control'
                            name="phone"
                            autoComplete="off"
                            placeholder='Phone No'
                            required
                        />

                        <input type="email"
                            className=' mb-2 form-control'
                            name="email"
                            autoComplete="off"
                            placeholder='Email Address'

                        />
                        <textarea
                            className=' mb-2 form-control'
                            name='message'
                            cols="30"
                            rows="3"
                            autoComplete="off"
                            placeholder='Message'
                            required
                        ></textarea>
                        <input className=' btn btn-outline-success my-lg-5' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;