import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductDisplay from "./ProductDisplay";
import Buttons from "./Buttons";
import '../BusinessSegment/Segment.css';

const Products = () => {
    const newProductDisplay = ProductList.slice(0, 8);
    const [item, setItem] = useState(newProductDisplay);

    const menuItems = [...new Set(ProductList.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = ProductList.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="col-12 text-center fw-bold section-title">Our Products <br /> And Sevices</h1>
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                    <ProductDisplay item={item} />
                </div>
            </div>
        </>
    );
};

export default Products;
