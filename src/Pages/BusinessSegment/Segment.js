import React, { useState } from "react";
import Data from "./SegmentList";
import SegmentCard from "./SegmentCard";
import '../BusinessSegment/Segment.css';

const Segment = () => {
    const newData = Data.slice(0, 4);
    const [item, setItem] = useState(newData);

    // const menuItems = [...new Set(Data.map((Val) => Val.category))];

    return (
        <div className="container segment_bg">
            <div className=" col-lg-10 mx-auto">
                <div className="row">
                    <h1 className="col-12 text-center fw-bold section-title pt-lg-5 gbl_animate_bottom">Awesome<br /> Business Segment</h1>
                    <SegmentCard item={item} />

                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-success btn-lg px-4 my-lg-5  rounded-pill fw-bold "
                            onClick={() => setItem(Data)}
                        > Show All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Segment;
