import React from "react";
import { Link } from "react-router-dom";
import CatrgoryDetails from "./CatrgoryDetails";
import '../Products/Product.css';


const SegmentCard = ({ item }) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {item.map((Val) => {
                        return (
                            <div className="col-lg-6  my-2 py-2 border-0 rounded-5" key={Val.id}>
                                <div className="col-lg-12">

                                    {(Val.id > 0 && Val.id < 3) ? <>

                                        <div className="row ">
                                            <div className="col-lg-6 wrapper">
                                                <div className="image-wrapper">
                                                    <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                </div>
                                            </div>
                                            <div className=" col-lg-6 my-auto">
                                                <h3 className=" fw-bold">{Val.category}</h3>
                                                <p>{Val.details.slice(0, 100)}</p>
                                                <Link className=' text-decoration-none fw-bold custom_btn' to={`/category/${Val.id}`}>Explore More</Link>
                                            </div>
                                        </div>
                                    </> : (Val.id > 2 && Val.id < 5) ? <>

                                        <div className="row ">
                                            <div className=" col-lg-6 my-auto">
                                                <h3 className=" fw-bold">{Val.category}</h3>
                                                <p>{Val.details.slice(0, 100)}</p>
                                                {/* <Link to={Val.id} className=" text-decoration-none fw-bold" >Explore More</Link> */}
                                                <Link className=' text-decoration-none fw-bold custom_btn' to={`/category/${Val.id}`}>Explore More</Link>
                                            </div>

                                            <div className="col-lg-6 wrapper ">
                                                <div className=" image-wrapper ">
                                                    <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                </div>
                                            </div>

                                        </div>
                                    </> : (Val.id > 4 && Val.id < 7) ? <>

                                        <div className="row ">
                                            <div className="col-lg-6 wrapper">
                                                <div className="image-wrapper">
                                                    <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                </div>
                                            </div>

                                            <div className=" col-lg-6 my-auto">
                                                {/* <div className=" d-flex flex-column justify-content-center align-items-center "> */}
                                                <h3 className=" fw-bold">{Val.category}</h3>
                                                <p>{Val.details.slice(0, 95)}</p>
                                                {/* <Link to={Val.id} className=" text-decoration-none fw-bold" >Explore More</Link> */}
                                                <Link className=' text-decoration-none fw-bold custom_btn' to={`/category/${Val.id}`}>Explore More</Link>
                                                {/* </div> */}
                                            </div>
                                        </div>

                                    </> : <></>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default SegmentCard;
