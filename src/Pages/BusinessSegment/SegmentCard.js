import React from "react";
import { Link } from "react-router-dom";
import '../Products/ProductDisplay.css';


const SegmentCard = ({ item }) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {item.map((Val) => {
                        return (
                            <div className="col-md-6 col-sm-12  py-2 border-0 rounded-5" key={Val.id}>
                                <div className="">
                                    <div className="row gbl_animate_left">
                                        {(Val.id === "1") ? <>
                                            <div className=" d-lg-flex justify-content-center gap-3  exp_cus_pad">
                                                <div className=" col-lg-6 wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6   my-lg-auto mt-2">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 50)}...</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalOne">Explore More</Link>
                                                    <div className="modal fade" id="categeryModalOne" tabIndex="-1" aria-labelledby="categeryModalOneLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content ">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5 fw-bold text-center" id="categeryModalOneLabel">{Val.category}</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" />
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    <div className="row ms-lg-3 gbl_animate_right">
                                        {(Val.id === "2") ? <>
                                            <div className=" d-lg-flex justify-content-center gap-lg-3 exp_cus_pad">
                                                <div className=" col-lg-6   wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " loading="eager" />
                                                    </div>
                                                </div>
                                                <div className="  col-lg-6  my-auto mt-2">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 50)}...</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalTwo">Explore More</Link>
                                                    <div className="modal fade" id="categeryModalTwo" tabIndex="-1" aria-labelledby="categeryModalTwoLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content ">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5 fw-bold text-center" id="categeryModalTwoLabel">{Val.category}</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" loading="eager" />
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    {/* for card 3 and 4 */}

                                    <div className="row gbl_animate_left">
                                        {(Val.id === "3") ? <>
                                            <div className=" d-lg-flex justify-content-center gap-lg-3 exp_cus_pad">
                                                <div className="  col-lg-6 ">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 50)}...</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalThree">Explore More</Link>
                                                    <div className="modal fade" id="categeryModalThree" tabIndex="-1" aria-labelledby="categeryModalThreeLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content ">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5 fw-bold text-center" id="categeryModalThreeLabel">{Val.category}</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" loading="eager" />
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-lg-6  wrapper mt-2">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " loading="eager" />
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    <div className="row ms-lg-3 gbl_animate_right ">
                                        {(Val.id === "4") ? <>
                                            <div className=" d-lg-flex justify-content-center gap-lg-3 exp_cus_pad">
                                                <div className="  col-lg-6 ">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 50)}...</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalFour">Explore More</Link>
                                                    <div className="modal fade" id="categeryModalFour" tabIndex="-1" aria-labelledby="categeryModalFourLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content ">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5 fw-bold text-center" id="categeryModalFourLabel">{Val.category}</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" loading="eager" />
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-lg-6   wrapper mt-2">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " loading="eager" />
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>


                                    {/* for card 5 and 6 */}

                                    <div className="row gbl_animate_left">
                                        {(Val.id === "5") ? <>
                                            <div className=" d-lg-flex justify-content-center gap-lg-3 exp_cus_pad">
                                                <div className=" col-lg-6   wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " loading="eager" />
                                                    </div>
                                                </div>
                                                <div className="  col-lg-6  my-auto mt-2">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 50)}...</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalFive">Explore More</Link>
                                                    <div className="modal fade" id="categeryModalFive" tabIndex="-1" aria-labelledby="categeryModalFiveLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content ">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5 fw-bold text-center" id="categeryModalFiveLabel">{Val.category}</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" loading="eager" />
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    <div className="row ms-lg-3 gbl_animate_right">
                                        {(Val.id === "6") ? <>
                                            <div className=" d-lg-flex   justify-content-center gap-lg-3 exp_cus_pad">
                                                <div className=" col-lg-6   wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " loading="eager" />
                                                    </div>
                                                </div>
                                                <div className="  col-lg-6   my-auto mt-2">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 50)}...</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalSix">Explore More</Link>
                                                    <div className="modal fade" id="categeryModalSix" tabIndex="-1" aria-labelledby="categeryModalSixLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content ">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5 fw-bold text-center" id="categeryModalSixLabel">{Val.category}</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" loading="eager" />
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
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

export default SegmentCard;
