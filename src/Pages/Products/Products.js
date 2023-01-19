import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import '../BusinessSegment/Segment.css';
// import { useEffect } from "react";

const Products = () => {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    // const sortMenuItems = menuItems.slice(0, 11)

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="col-12 text-center fw-bold section-title">Our Products <br /> And Sevices</h1>
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                    <Card item={item} />
                </div>
            </div>
        </>
    );
};

export default Products;
