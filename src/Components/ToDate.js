import React from "react";

const ToDate = (props) => {
    return (
        <div className="date">
            <label>Til dato</label>
            <input
            type="date"
                value={props.selectedToDate }
                onChange={(e) => props.onSelectChange("selectedToDate", e.target.value)} />
        </div>
    );
};
export default ToDate;