import React from 'react';
import ClientsGridCarousol from './ClientsGridCarousol';

const Clients = () => {
    return (
        <div>
            <div className=' my-0 py-0 '>
                <h1 className="col-12 text-center fw-bold section-title pt-lg-5" data-aos="fade-up">Our Clients</h1>
                <h3 className=' text-center fw-bold my-md-3 animate_bottom location_heading' data-aos="flip-left"> Our Satisfied Clients </h3>
                <div className=' col-10 mx-auto '>
                    <div className='row'>
                        <ClientsGridCarousol></ClientsGridCarousol>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Clients;