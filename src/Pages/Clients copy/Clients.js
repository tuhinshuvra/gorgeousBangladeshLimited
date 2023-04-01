import React from 'react';
import GridCarousol from '../Shared/GridCarousolItem/GridCarousol';

import './Clients.css';

const Clients = () => {
    return (
        <div>
            <div className=' my-0 py-0 '>
                <h1 className="col-12 text-center fw-bold section-title pt-lg-5 gbl_animate_bottom">Our Clients</h1>
                <div className=' col-10 mx-auto '>
                    <div className='row'>
                        <GridCarousol></GridCarousol>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Clients;