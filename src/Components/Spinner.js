import React from "react";
import '../custom.css';

const Spinner = () => {
    return (
        <div className="row">
            <div className='progress'>
                <div className="indeterminate"></div>
            </div>
        </div>
        
    );
};

export default Spinner;