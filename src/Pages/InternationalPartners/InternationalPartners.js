import React from 'react';
import InternationalPartnersGridCarousol from './InternationalPartnersGridCarousol';

const InternationalPartners = () => {
    return (
        <div className=' my-5'>
            <h1 className="col-12 text-center fw-bold section-title gbl_animate_bottom">Our International Partners</h1>
            <div className=' col-10 mx-auto '>
                <div className='row'>
                    <InternationalPartnersGridCarousol></InternationalPartnersGridCarousol>
                </div>
            </div>
        </div>
    );
};

export default InternationalPartners;