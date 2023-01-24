import React from 'react';

const CatrgoryDetails = ({ details }) => {

    console.log("CatrgoryDetails : ", details)

    return (
        <div>
            <h2 className=' text-center my-lg-5'>Comming Soon <br /> Category Details Section</h2>
            <p>{details}</p>
        </div>
    );
};

export default CatrgoryDetails;