import React from "react";
import SearchForm from "./SearchForm.js";
import '../custom.css';
import { v4 as uuidv4 } from 'uuid';


const SearcBar = (props) => {
    const httpMethod = "POST";
    const contentType = "application/json;charset=UTF-8";
    const api = "ticket";
    const endpoint = "search";

    const handleFormEvent = (event) => {
        
        const searchTerm = props.term;    
        if (searchTerm.trim() !== "") {
            props.clear();
            props.setIsSearching(true);
            search(searchTerm, event);
        }        
    };

    const search = async (searchTerm, event) => {
        let res = null;
        try {
            event.preventDefault();
            let callId = "" + uuidv4();
            const requestOptions = {
                method: httpMethod,
                headers: { "Content-Type": contentType, "callId": callId, "includeFront": props.isFrontChecked },
                body: JSON.stringify(searchTerm)
            };

            res = await fetch(`${api}/${endpoint}`, requestOptions);
            //console.log(`${api}/${endpoint} --- Body=${requestOptions}`);
            let data = await res.json();
            
            props.setIsSearching(false);
            props.addTickets(data);  
            
        } catch (error) {                 
            props.addTickets({
                header: `${res.status} Error fetching data: ${error.message}`,
                query: searchTerm,
                tickets: [],
                managers: [],
                companies: [],
                products: [],
                versions: [],
                numberOfTickets: 0
            });
            console.error(`Error fetching data: ${error.message}`);
            props.setIsSearching(false);
            
        }
    };

    const checkHandler = () => {
        props.checkHandler(!props.isFrontChecked);
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
                        <div>
                            <label>Inkluder DIPS FRONT</label>
                            <input type="checkbox" onChange={checkHandler} value={props.isFrontChecked} checked={props.isFrontChecked} />
                        </div>
                </div>
            </nav>
            </header>
        </div>
    );
};
export default SearcBar;