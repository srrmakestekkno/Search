import React from "react";


const SearchForm = (props) => {
    return (
        <form>
            <input
                onKeyDown={props.onChange}
                type="text"
                placeholder="Søk i saker..."
                required />            
            <div style={{ float: "right" }}>
                <label>Eksluder DIPS FRONT</label>
                <input type="checkbox" checked />
            </div>
        </form>

    );
};
export default SearchForm;