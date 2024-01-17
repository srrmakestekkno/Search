import React, { useState } from "react";
import '../custom.css';

const Version = (props) => ( 
    <option value={props.name}>{props.name}</option>
);

const Versions = (props) => {
    
    return (
        <div className='hf'>
            <label>Versjoner</label>
            <select
                value={props.selectedVersion}
                onChange={(event) => props.onSelectChange("selectedVersion", event.target.value)}>
                <option value="">-- Velg versjon --</option>
                {props.versions.map(version => <Version key={version.id} {...version} />)}
            </select>
        </div>
    );
};

const VersionDropdown = (props) => {  
    return (
        <div>
            <Versions
                onSelectChange={props.onSelectChange}
                selectedVersion={props.selectedVersion}
                versions={props.versions} />
        </div>
    );
};
export default VersionDropdown;