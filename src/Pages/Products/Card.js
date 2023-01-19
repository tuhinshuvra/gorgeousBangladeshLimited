import React from "react";
import './Product.css'
const Card = ({ item }) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {item.map((Val) => {
                        return (
                            <div className="col-lg-3  my-2 py-2 border-0 rounded-5" key={Val.id}>
                                <div className="col-lg-10">
                                    <div className="">
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
