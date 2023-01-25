import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className=' text-center  fw-bold'>Contact Form</h2>
            <div className=' container'>
                <div className=' contact-form col-lg-6 mx-auto '>
                    <form
                        className='d-flex flex-column'
                        action="https://formspree.io/f/mbjelnwv"
                        method="POST">

                        <input type="text"

                            className=' mb-2 form-control'
                            name="username"
                            autoComplete="off"
                            placeholder='Enter User Name'
                            required
                        />

                        <input type="text"
                            className=' mb-2 form-control'
                            name="phone"
                            autoComplete="off"
                            placeholder='Enter Phone No'
                            required
                        />

                        <input type="email"
                            className=' mb-2 form-control'
                            name="email"
                            autoComplete="off"
                            placeholder='Enter Email Address'
                            required
                        />
                        <textarea
                            className=' mb-2 form-control'
                            name='message'
                            cols="30"
                            rows="6"
                            autoComplete="off"
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