import React from "react";
import SearchForm from "./SearchForm.js";
import '../custom.css';
import { v4 as uuidv4 } from 'uuid';


const SearcBar = (props) => {
    const handleFormEvent = (event) => {
        
        const searchTerm = props.term;    
        if (searchTerm.trim() !== "") {
            props.clear();
            search(searchTerm, event);
            props.setIsSearching(true);
        }        
    };

    const search = async (searchTerm, event) => {
        try {
            event.preventDefault();

            // Sett s�ker i saker info og loader

            let callId = "" + uuidv4();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=UTF-8", "callId": callId },
                body: JSON.stringify(searchTerm)
            };

            const res = await fetch(`ticket/search`, requestOptions);
            const data = await res.json();
            props.setIsSearching(false);
            props.addTickets(data);            
        } catch (error) {
            // Vis feilmelding...
            console.error('Error fetching data:', error);
            //setLoading(false);
        }
    };
    

    return (
        <div>
        <header>
            <nav className="fixed-navbar">
                <div className="navbar">
                    <div className="logo">DIPS</div>
                    <div className="search">
                            <SearchForm onChange={handleFormEvent} setSearchTermState={props.setSearchTermState} term={props.term} /> 
                    </div>
                </div>
            </nav>
            </header>
        </div>
    );
};
export default SearcBar;