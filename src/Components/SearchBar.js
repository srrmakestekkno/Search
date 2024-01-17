import React from "react";
import SearchForm from "./SearchForm.js";
import '../custom.css';
import { v4 as uuidv4 } from 'uuid';



const SearcBar = (props) => {
    const handleFormEvent = async (event) => {
        const searchTerm = event.target.value;
        if (event.key === "Enter" && searchTerm.trim() !== "") {
            event.preventDefault();
            
            let callId = "" + uuidv4();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=UTF-8", "callId": callId },
                body: JSON.stringify(searchTerm)
            };

            const res = await fetch(`stian/search`, requestOptions);            
            const data = await res.json(); 
            props.addTickets(data);
        }
    };

    return (
        <header>
            <nav className="fixed-navbar">
                <div className="navbar">
                    <div className="logo">DIPS</div>
                    <div className="search">
                        <SearchForm onChange={handleFormEvent} /> 
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default SearcBar;