import React, { useState } from "react";
import Data from "./SegmentList";
import '../BusinessSegment/Segment.css';
import SegmentCard from "./SegmentCard";

const Segment = () => {
    const newData = Data.slice(0, 4);
    const [item, setItem] = useState(newData);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return (
        <div className="container">
            <div className="row">
                <h1 className="col-12 text-center fw-bold section-title">Awesome<br /> Business Segment</h1>
                <SegmentCard item={item} />

                <div className="d-flex justify-content-center mb-lg-3">
                    <button className="btn btn-primary ms-2 "
                        onClick={() => setItem(Data)}
                    > Show All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Segment;
