import React from "react";
import productImage from '../../assets/images/products/fabric.png';

const Card = ({ item }) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {item.map((Val) => {
                        return (
                            <div
                                // className="col-md-3 col-sm-6 card my-2 py-2 border-0 rounded-5"
                                className="col-md-3 col-sm-6 card my-2 py-2 border-0 rounded-5"
                                key={Val.id}
                            >
                                <div className="col-lg-10 mx-auto">
                                    <div className="card-img-top text-center">
                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-3 " />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Card;
