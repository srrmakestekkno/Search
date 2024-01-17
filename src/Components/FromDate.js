import React from "react";

const FromDate = (props) => {
    return (

        <div className="date">
            <label>Fra dato</label>
            <input
                type="date"
                id="fromDate"
                name="selectedFromDate"
                value={props.selectedFromDate}
                onChange={(e) => props.onSelectChange("selectedFromDate", e.target.value)} />
        </div>
    );
};
export default FromDate;