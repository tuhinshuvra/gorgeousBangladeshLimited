import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mtqic24', 'template_wfufswf', e.target, '6R5yj-ZgBncNZfPpC')
            .then((result) => {
                console.log(result.text);
                toast.success('Your email send successfully.')
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="contact_bg col-lg-12 px-4 py-5" style={{ backgroundColor: '#E5F7E5' }}>
            <div className="row align-items-center g-lg-5 py-lg-5 col-lg-10 mx-auto p-sm-0">

                <div className="col-lg-5 text-center text-lg-start  my-auto" data-aos="fade-up-right">
                    <div className="">
                        <h1 className="text-3xl font-bold mb-2 ">Get in Touch!</h1>
                        <h5 className=' mb-2'><b>Gorgeous Bangladesh LTD.</b></h5>
                        <p className=' mb-0'><b>Corporate Office:</b></p>
                        <p className=' mb-0'>MAG House, House No-20, Shah Makhdum</p>
                        <p>Avenue, Uttara Sector -11, Dhaka-1230</p>
                        <p className=' mb-0'><b>Website:</b>
                            <Link className=' text-decoration-none' to="/"> www.gbl-bd.com</Link>
                        </p>
                        <p className=' mb-0'><b>Email:</b> info@gbl-bd.com</p>
                        <p className=' mb-0'><b>Facebook:</b>
                            <a className=' text-decoration-none' href="https://www.facebook.com/GorgeousBangladeshLtd" target="_blank" rel="noreferrer"> Gorgeous Bangladesh Ltd</a> <br />
                        </p>
                        <p className=' mb-lg-0 mb-sm-3'><b>Phone:</b> +8802 224470053, +8802 224470056</p>
                    </div>
                </div>

                <div className="col-lg-6   mx-auto my-auto" data-aos="fade-up-left">
                    <form className='d-flex flex-column'
                        action="https://formspree.io/f/mbjelnwv" method="POST"
                        onSubmit={sendEmail}>

                        <input type="text" className=' mb-2 form-control' name="name" autoComplete="off" placeholder='Name' required />

                        <input type="text" className=' mb-2 form-control' name="phone" autoComplete="off" placeholder='Phone No' required />

                        <input type="email" className=' mb-2 form-control' name="user_email" autoComplete="off" placeholder='Email Address' />

                        <textarea className='form-control mb-3' name='message' cols="30" rows="3" autoComplete="off" placeholder='Message' required />

                        <button className=' btn btn-success' type="submit" value="Send Message">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;