import React from 'react';
import AgroAnddFoods from '../../assets/images/categories/Agro_and_Foods.png';
import CementIndustryMaterials from '../../assets/images/categories/Cement_Industry_Materials.png';
import CommercialTransport from '../../assets/images/categories/Commercial_Transport.png';
import LogisticsAndSecurity from '../../assets/images/categories/Logistics_and_Security.png';
import PowerSolution from '../../assets/images/categories/Power_Solution.png';
import RMGSector from '../../assets/images/categories/RMG_Sector.png';
import { Link } from 'react-router-dom';
import './Segment.css'

const BusinessSegment = () => {
    return (
        <div className=''>
            <h1 className=' fw-bold mb-5 section-title'>Awesome <br /> Business Segment</h1>

            <div className=' row'>
                <div className='segment'>
                    <div class="card mb-3 border-0 " >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={AgroAnddFoods} class="img-fluid rounded-5 " alt="..." />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title float-start">AgroAnddFoods</h5>
                                    <p class="card-text float-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link><p class="card-text float-start fw-bold my-lg-4">More Details</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 " >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={CementIndustryMaterials} class="img-fluid rounded-5" alt="..." />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title float-start">CementIndustryMaterials</h5>
                                    <p class="card-text float-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link><p class="card-text float-start fw-bold my-lg-4">More Details</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 " >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={CommercialTransport} class="img-fluid rounded-5" alt="..." />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title float-start">CommercialTransport</h5>
                                    <p class="card-text float-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link><p class="card-text float-start fw-bold my-lg-4">More Details</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 " >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={LogisticsAndSecurity} class="img-fluid rounded-5" alt="..." />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title float-start">LogisticsAndSecurity</h5>
                                    <p class="card-text float-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link><p class="card-text float-start fw-bold my-lg-4">More Details</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 " >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={PowerSolution} class="img-fluid rounded-5" alt="..." />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title float-start">PowerSolution</h5>
                                    <p class="card-text float-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link><p class="card-text float-start fw-bold my-lg-4">More Details</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 " >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={RMGSector} class="img-fluid rounded-5" alt="..." />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title float-start">RMGSector</h5>
                                    <p class="card-text float-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link><p class="card-text float-start fw-bold my-lg-4">More Details</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSegment;