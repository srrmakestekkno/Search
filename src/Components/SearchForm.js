import React from "react";


const SearchForm = (props) => {
    return (
        <form onSubmit={props.onChange}>
            <input       
                value={props.term}
                onChange={event => props.setSearchTermState(event.target.value)}
                type="text"
                placeholder="Søk i saker..."
                required />           
            
        </form>

    );
};
export default SearchForm;