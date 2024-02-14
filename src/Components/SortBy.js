import React from "react";

const SortBy = (props) => {
    return (
        <div className="date2">
            <label className="dropdownLabel">Sorter søkeresultatet</label>
            <select
                className="dropdown"
                onChange={e => props.sort(e)}>
            <option value="">Sorter etter...</option>
            <option value="desc">Dato synkende</option>
            <option value="asc">Dato stigende</option>
            </select>
        </div>
    );
};
export default SortBy;