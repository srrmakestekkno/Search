import React, { useState } from "react";

const Municipal = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked); // Toggle the checkbox state
    };
    return (
        <div style={{ margin: 5 }}>
            <form>
                <label for="municipal">Inkluder kommune i søket</label>
                <input
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    id="municipal_id"
                    checked={isChecked} />
            </form>
        </div>
    );
}; 
export default Municipal;