import React from "react";
import CustomerDropDown from "./CustomerDropDown";
import FromDate from "./FromDate.js";
import ToDate from "./ToDate.js";
import Product from "./Product.js";
import Municipal from "./Municipal.js";

const SideBar = (props) => {
    const handleSelect = (value) => {
        const data = props.data.filter(x => x.customer === value);
        if (value.trim() === "") {
            props.originalResult();
        } else {
            props.onChange(data);
        }

    };

    return (
        <aside className="sidebar">
            <CustomerDropDown onChange={handleSelect} />
            <FromDate />
            <ToDate />
            <Product />
            <Municipal />
        </aside>
    );
};

export default SideBar;