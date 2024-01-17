import React, { useState } from "react";
import CustomerDropdown from "./CustomerDropdown";
import FromDate from "./FromDate.js";
import ToDate from "./ToDate.js";
import ProductDropdown from "./ProductDropdown.js";
import Municipal from "./Municipal.js";
import VersionDropdown from "./VersionDropdown";
 
const Status = (props) => {   
    return (
        <div className="products">
            <form>
                <label>Status</label>
                <select
                    value={props.selectedStatus}
                    onChange={(event) => props.onSelectChange("selectedStatus", event.target.value)}>
                    <option value="">-- Velg status --</option>
                    <option value="active">Aktive</option>
                    <option value="inactive">Avsluttet</option>
                </select>
            </form>
        </div>
    )
};

const SideBar = (props) => {  
    const handleSubmit = (event, button) => {  
        if (button === "filter") {
            props.filterTheResult(event);
        } 

        if (button === "clear") {
            props.resetParams(event);            
        }        
    };    


    return (
        <aside className="sidebar">
            <form>
                <CustomerDropdown
                    onSelectChange={props.onSelectChange}
                    selectedManager={props.selectedManager}
                    managers={props.data} />
                <FromDate
                    onSelectChange={props.onSelectChange}
                    selectedFromDate={props.selectedFromDate} /> 
                <ToDate
                    onSelectChange={props.onSelectChange}
                    selectedToDate={props.selectedToDate} /> 
                <ProductDropdown
                    onSelectChange={props.onSelectChange}
                    selectedProduct={props.selectedProduct}
                    products={props.products} />
                <VersionDropdown
                    onSelectChange={props.onSelectChange}
                    selectedVersion={props.selectedVersion}
                    versions={props.versions}
                    />
                <Status
                    selectedStatus={props.selectedStatus }
                    onSelectChange={props.onSelectChange} />
                <Municipal />
                <button onClick={e => handleSubmit(e, "filter")}>Filtrer søket</button>  
                <button onClick={(e) => props.onReset(e)}>Nullstill</button>
            </form>
        </aside>
    );
};

export default SideBar;