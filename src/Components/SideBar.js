import React from "react";
import ManagersDropDown from "./ManagersDropDown.js";
//import FromDate from "./FromDate.js";
import SortBy from "./SortBy.js";
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
    const handleSubmit = (event) => {  
        props.filterTheResult(event);        
    };    

    return (
        <aside className="sidebar">
            <SortBy sort={props.sort} />
            <form>                
                <ManagersDropDown
                    onSelectChange={props.onSelectChange}
                    selectedManager={props.selectedManager}
                    managers={props.data} />
                {/*<FromDate*/}
                {/*    onSelectChange={props.onSelectChange}*/}
                {/*    selectedFromDate={props.selectedFromDate} /> */}
                
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
                <button onClick={e => handleSubmit(e)}>Filtrer søket</button>  
                <button onClick={e => props.onReset(e)}>Nullstill</button>
            </form>
        </aside>
    );
};

export default SideBar;