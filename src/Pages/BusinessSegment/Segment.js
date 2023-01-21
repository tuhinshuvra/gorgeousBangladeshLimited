import React, { useState } from "react";
import Data from "./SegmentList";
import '../BusinessSegment/Segment.css';
import SegmentCard from "./SegmentCard";

const Segment = () => {
    const newData = Data.slice(0, 4);
    const [item, setItem] = useState(newData);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    return (
        <div className="container segment_bg">
            <div className="row">
                <h1 className="col-12 text-center fw-bold section-title">Awesome<br /> Business Segment</h1>
                <SegmentCard item={item} />

                <div className="d-flex justify-content-center mb-lg-3">
                    {/* <button className="btn btn-primary ms-2 " */}
                    <button className="btn btn-success btn-lg px-4   rounded-pill fw-bold "
                        onClick={() => setItem(Data)}
                    > Show All
                    </button>
                    {/* <button type="button" className="btn btn-success btn-lg px-4   rounded-pill fw-bold">Explore More</button> */}
                </div>
            </div>
        </div>
    );
};

export default Segment;
