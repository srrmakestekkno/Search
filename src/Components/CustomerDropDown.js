import React, { useState } from "react";
import '../custom.css';

const Company = (props) => ( 
    <option value={props.manager}>{props.manager}</option>
);

const Companies = (props) => {
    
    return (
        <div className='hf'>
            <label>Forvalter</label>
            <select
                value={props.selectedManager}
                onChange={(event) => props.onSelectChange("selectedManager", event.target.value)}>
                <option value="">-- Velg foretak --</option>
                {props.managers.map(manager => <Company key={manager.id} {...manager} />)}
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
            <Companies onSelectChange={props.onSelectChange} selectedManager={props.selectedManager} onSelect={handleSelectedValue} managers={props.managers} />
        </div>
    );
};
export default CustomerDropDown;