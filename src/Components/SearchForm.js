import React from "react";


const SearchForm = (props) => {
    return (
        <form>
            <input
                onKeyDown={props.onChange}
                type="text"
                placeholder="S�k i saker..."
                required />
        </form>
    );
};
export default SearchForm;