import React from "react";
import ManagersDropDown from "./ManagersDropDown.js";
import CompaniesDropdown from "./CompaniesDropdown.js";
import SortBy from "./SortBy.js";
import ProductDropdown from "./ProductDropdown.js";
import VersionDropdown from "./VersionDropdown";

const Status = (props) => {   
    return (
        <div className="products">
            <form>
                <label className="dropdownLabel">Status</label>
                <select
                    onClick={e => props.statusClick(e)}
                    className="dropdown"
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
                    managerClick={props.filterTheResult}
                    onSelectChange={props.onSelectChange}
                    selectedManager={props.selectedManager}
                    managers={props.managers} />
                <CompaniesDropdown
                    companyClick={props.filterTheResult}
                    onSelectChange={props.onSelectChange}
                    selectedCompany={props.selectedCompany}
                    companies={props.companies} />
                <ProductDropdown
                    productClick={props.filterTheResult}
                    onSelectChange={props.onSelectChange}
                    selectedProduct={props.selectedProduct}
                    products={props.products} />
                <VersionDropdown
                    versionClick={props.filterTheResult}
                    onSelectChange={props.onSelectChange}
                    selectedVersion={props.selectedVersion}
                    versions={props.versions}
                    />
                <Status
                    statusClick={props.filterTheResult}
                    selectedStatus={props.selectedStatus }
                    onSelectChange={props.onSelectChange} />
                {/*<Municipal checkHandler={props.checkHandler} isMunicipalChecked={props.isMunicipalChecked} removeMunicipal={props.removeMunicipal} */}
                {/*<button onClick={e => handleSubmit(e)}>Filtrer søket</button>  */}
                <button className="resetButton" onClick={e => props.onReset(e)}>Nullstill</button>
            </form>
        </aside>
    );
};

export default SideBar;