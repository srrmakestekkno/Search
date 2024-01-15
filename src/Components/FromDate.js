import React from "react";

const FromDate = (props) => {
    return (
        <div className="date">
            <label>Fra dato</label>
            <input
                type="date"
                id="fromDate"
                name="from_date"
                onChange={(e) => props.onSelect(e.target.value)} />
        </div>
    );
};
export default FromDate;