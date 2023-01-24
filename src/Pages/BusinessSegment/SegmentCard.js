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

                                    {/* {(Val.id > 0 && Val.id < 3) ? <> */}

                                    <div className="row">
                                        {(Val.id === "1") ? <>
                                            <div className=" d-flex gap-lg-3">
                                                <div className="col-lg-6 wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                    </div>
                                                </div>
                                                <div className=" col-lg-6 my-auto">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 100)}</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalOne">Explore More</Link>
                                                    <div class="modal fade" id="categeryModalOne" tabindex="-1" aria-labelledby="categeryModalOneLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content ">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5 fw-bold text-center" id="categeryModalOneLabel">{Val.category}</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" />
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    <div className="row">
                                        {(Val.id === "2") ? <>
                                            <div className="d-flex gap-lg-3">
                                                <div className="col-lg-6 wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                    </div>
                                                </div>
                                                <div className=" col-lg-6 my-auto">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 100)}</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalTwo">Explore More</Link>
                                                    <div class="modal fade" id="categeryModalTwo" tabindex="-1" aria-labelledby="categeryModalTwoLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content ">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5 fw-bold text-center" id="categeryModalTwoLabel">{Val.category}</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" />
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    {/* for card 3 and 4 */}

                                    <div className="row">
                                        {(Val.id === "3") ? <>
                                            <div className="d-flex gap-lg-3">
                                                <div className=" col-lg-6 my-auto">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 100)}</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalThree">Explore More</Link>
                                                    <div class="modal fade" id="categeryModalThree" tabindex="-1" aria-labelledby="categeryModalThreeLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content ">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5 fw-bold text-center" id="categeryModalThreeLabel">{Val.category}</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" />
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    <div className="row">
                                        {(Val.id === "4") ? <>
                                            <div className="d-flex gap-lg-3">
                                                <div className=" col-lg-6 my-auto">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 100)}</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalFour">Explore More</Link>
                                                    <div class="modal fade" id="categeryModalFour" tabindex="-1" aria-labelledby="categeryModalFourLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content ">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5 fw-bold text-center" id="categeryModalFourLabel">{Val.category}</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" />
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>


                                    {/* for card 5 and 6 */}

                                    <div className="row">
                                        {(Val.id === "5") ? <>
                                            <div className="d-flex gap-lg-3">
                                                <div className="col-lg-6 wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                    </div>
                                                </div>
                                                <div className=" col-lg-6 my-auto">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 100)}</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalFive">Explore More</Link>
                                                    <div class="modal fade" id="categeryModalFive" tabindex="-1" aria-labelledby="categeryModalFiveLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content ">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5 fw-bold text-center" id="categeryModalFiveLabel">{Val.category}</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" />
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>

                                    <div className="row">
                                        {(Val.id === "6") ? <>
                                            <div className="d-flex gap-lg-3">
                                                <div className="col-lg-6 wrapper">
                                                    <div className="image-wrapper">
                                                        <img src={Val.img} alt={Val.title} className=" img-fluid rounded-5 " />
                                                    </div>
                                                </div>
                                                <div className=" col-lg-6 my-auto">
                                                    <h3 className=" fw-bold">{Val.category}</h3>
                                                    <p>{Val.details.slice(0, 100)}</p>
                                                    <Link className=' text-decoration-none fw-bold custom_btn' data-bs-toggle="modal" data-bs-target="#categeryModalSix">Explore More</Link>
                                                    <div class="modal fade" id="categeryModalSix" tabindex="-1" aria-labelledby="categeryModalSixLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content ">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5 fw-bold text-center" id="categeryModalSixLabel">{Val.category}</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <h6 className=" mb-lg-3"> {Val.details}</h6>
                                                                    <img className=" img-fluid rounded-5" src={Val.img} alt="" />
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-outline-success " data-bs-dismiss="modal">Close</button>
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
