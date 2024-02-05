import React from "react";

const Municipal = (props) => {
    

    const handleChange = (e) => {
        props.checkHandler(!props.isMunicipalChecked);        
        props.removeMunicipal(e);
        
    };

    return (
        <div style={{ margin: 5 }}>
            <form>
                <label>Eksluder kommune(virker ikke)</label>
                <input
                    type="checkbox"
                    onChange={e => handleChange(e)}
                    id="municipal_id"
                    value={props.isMunicipalChecked}
                    checked={props.isMunicipalChecked} />
            </form>
        </div>
    );
}; 
export default Municipal;