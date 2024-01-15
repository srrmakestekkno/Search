import React, { useState } from "react";

const Municipal = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.value); // Toggle the checkbox state
    };


    // bruk i kode
    //isChecked ? "" : "";

    return (
        <div style={{ margin: 5 }}>
            <form>
                <label>Inkluder kommune i søket</label>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    id="municipal_id"
                    checked={isChecked} />
            </form>
        </div>
    );
}; 
export default Municipal;