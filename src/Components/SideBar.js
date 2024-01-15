import React, { useState } from "react";
import CustomerDropDown from "./CustomerDropDown";
import FromDate from "./FromDate.js";
import ToDate from "./ToDate.js";
import ProductDropDown from "./ProductDropDown.js";
import Municipal from "./Municipal.js";

const Status = (props) => {   
    return (
        <div className="products">
            <form>
                <label>Status</label>
                <select onChange={(event) => props.onSelect(event.target.value)} name="" id="">
                    <option value="">-- Velg status --</option>
                    <option value="active">Aktive</option>
                    <option value="inactive">Avsluttet</option>
                </select>
            </form>
        </div>
    )
};

const SideBar = (props) => {    
    const handleSelectedCompany = (selectedCompany) => {        
        props.onSelectedCompany(selectedCompany);           
    };

    const handleSelectedProduct = (selectedProduct) => {        
        props.onSelectedProduct(selectedProduct);        
    };

    const handleSelectedFromDate = (fromDate) => {
        props.onSelectedFromDate(fromDate);
    };

    const handleSelectedToDate = (toDate) => {       
        props.onSelectedToDate(toDate);
    };

    const handleSelectedStatus = (value) => {
        props.onSelectedStatus(value);  
    };


    const [manager, setManager] = useState("");

    const handleSubmit = () => {

    };


    return (
        <aside className="sidebar">
            <form onSubmit={handleSubmit }>
            <CustomerDropDown companies={props.data} onChange={handleSelectedCompany} />
            <FromDate onSelect={handleSelectedFromDate} /> 
            <ToDate onSelect={handleSelectedToDate} /> 
            <ProductDropDown products={props.products} onChange={handleSelectedProduct} />
            <Status onSelect={handleSelectedStatus} />
                <Municipal />
                <button>Filtrer</button>
            </form>
        </aside>
    );
};

export default SideBar;