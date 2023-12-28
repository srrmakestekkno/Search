import React from "react";

const CustomerDropDown = props => {
    const handleSelectedValue = (event) => {
        var value = event.target.value;
        props.onChange(value);
    };

    return (
        <div className='hf'>
            <label>Velg foretak</label>
            <select onChange={handleSelectedValue}>
                <option value="">-- Velg foretak --</option>
                <option value="Sykehuspartner">Sykehuspartner</option>
                <option value="Betanien">Betanien</option>
            </select>
        </div>
    );
};
export default CustomerDropDown;