import React from "react";
import SearchForm from "./SearchForm.js";
import '../custom.css';

const SearcBar = (props) => {
    const handleFormEvent = async (event) => {
        const searchTerm = event.target.value;
        if (event.key === "Enter" && searchTerm.trim() !== "") {
            event.preventDefault();
            // feilhåndtering
            //const res = await fetch(`https://localhost:7088/Stian/search?searchTerm=test`); CORS problem
            
            const res = await fetch(`stian`);
            const data = await res.json();
            props.keepHistory(data);
            props.onSubmit(data);
        }
    };

    return (
        <header>
            <nav className="fixed-navbar">
                <div className="navbar">
                    <div className="logo">Your Logo</div>
                    <div className="search">
                        <SearchForm onChange={handleFormEvent} />
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default SearcBar;