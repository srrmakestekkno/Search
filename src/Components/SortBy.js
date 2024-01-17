import React from "react";


const SortBy = (props) => {  
    return (
        <select
            style={{ float: "right", height: "40px" }}>
            <option value="">Sorter etter...</option>
            <option value="desccDate">Dato synkende</option>
            <option value="ascDate">Dato stigende</option>
        </select>
    );
};

export default SortBy;