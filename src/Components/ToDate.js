import React from "react";

const ToDate = (props) => {
    return (
        <div className="date">
            <label>Til dato</label>
            <input
                type='date'
                id="toDate"
                name="to_date"
                onChange={(e) => props.onSelect(e.target.value)} />
        </div>
    );
};
export default ToDate;