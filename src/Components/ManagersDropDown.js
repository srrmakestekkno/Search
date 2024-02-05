import React from "react";
import '../custom.css';

const Manager = (props) => ( 
    <option value={props.manager}>{props.managerName}</option>
);

const Managers = (props) => {
    return (
        <div className='hf'>
            <label className="dropdownLabel">Forvalter</label>
            <select
                className="dropdown"
                onClick={e => props.managerClick(e)}
                value={props.selectedManager}
                onChange={(event) => props.onSelectChange("selectedManager", event.target.value)}>
                <option value="">-- Velg foretak --</option>
                {props.managers.map(manager => <Manager key={manager.id} {...manager} />)}
            </select>
        </div>
    );
};

const ManagersDropDown = (props) => { 
    return (
        <div>
            <Managers
                managerClick={props.managerClick}
                onSelectChange={props.onSelectChange}
                selectedManager={props.selectedManager}
                managers={props.managers} />
        </div>
    );
};
export default ManagersDropDown;

                