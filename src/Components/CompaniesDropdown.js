import React from "react";
import '../custom.css';

const Company = (props) => (
    <option value={props.companies}>{props.companyName}</option>
);

const CompaniesDropdown = (props) => {
    return (
        <div className="company">
            <label className="dropdownLabel">Firma</label>
            <select
                className="dropdown"
                onClick={e => props.companyClick(e)}
                value={props.selectedCompany}
                onChange={e => props.onSelectChange("selectedCompany", e.target.value)}>
                <option value="">--- Velg firma ---</option>
                {props.companies.map(company => <Company key={company.id} {...company} />)}
            </select>
        </div>
    );
}
export default CompaniesDropdown;