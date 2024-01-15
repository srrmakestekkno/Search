import React from "react";
import '../custom.css';

const Company = (props) => ( 
    <option value={props.manager}>{props.manager}</option>
);

const Companies = (props) => {
    return (
        <div className='hf'>
            <label>Forvalter</label>
            <select  onChange={(event) => props.onSelect(event.target.value)}>
                <option value="">-- Velg foretak --</option>
                {props.companies.map(company => <Company key={company.id} {...company} />)}
                
            </select>
        </div>
    );
};

const CustomerDropDown = (props) => {  
    const handleSelectedValue = (value) => {
        props.onChange(value);        
    };

    return (
        <div>
            <Companies onSelect={handleSelectedValue} companies={props.companies} />
        </div>
    );
};
export default CustomerDropDown;