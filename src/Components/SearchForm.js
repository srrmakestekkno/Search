import React from "react";


const SearchForm = (props) => {
    return (
        <form>
            <input
                onKeyDown={props.onChange}
                type="text"
                placeholder="Søk i saker..."
                required />
        </form>
    );
};
export default SearchForm;