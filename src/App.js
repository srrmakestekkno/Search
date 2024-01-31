import React, { useState } from "react";
import SideBar from "./Components/SideBar.js";
import SearcBar from "./Components/SearchBar.js";
import MainContent from "./Components/MainContent.js";
import './custom.css';
import utils from "./utils.js";


const App = () => {
    const defaultFormData = {
        "selectedManager": "",
        "selectedProduct": "",
        "selectedVersion": "",
        "selectedFromDate": "",
        "selectedToDate": "",
        "selectedStatus": "",
        "searchTerm": ""
    };

    const [searchTerm, setSearchTermState] = useState("");
    const [formData, setFormData] = useState(defaultFormData);

    // Saker
    const [tickets, setTickets] = useState([]);
    /*const [originalResult, setOriginalResult] = useState([]);  */
    const [originalResult, setOriginalResult] = useState({});  

    const [isSearching, setIsSearching] = useState(false);

    // Dropdowns
    const [managers, setManagers] = useState([]); // Unike forvaltere som finnes i søket.
    const [products, setProducts] = useState([]); // Unike produkter som finnes i søket.
    const [versions, setVersions] = useState([]); // Unike versjoner som finnes i søket.

    const addTickets = (profileData) => {
        setOriginalResult(profileData);
        setTickets(profileData.tickets);
        setManagers(profileData.companies);
        setProducts(profileData.products);
        setVersions(profileData.versions)
        setIsSearching(false);
    };

    const clearTickets = () => {
        setOriginalResult({});
        setTickets([]);
        setManagers([]);
        setProducts([]);
        setVersions([])
        setIsSearching(true);
    };

    const handleSelectChange = (name, selectedValue) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: selectedValue
        }));
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormData(defaultFormData);;
        if (originalResult.tickets !== undefined) {
            setTickets(originalResult.tickets);
        }
    };
    

    const filterTheResult = (event) => {        
        event.preventDefault();        
        if (originalResult.tickets === undefined) {
            return;
        }
        let status = "";
        if (formData.selectedStatus !== "") {
            status = formData.selectedStatus === "active" ? 1 : 2;
        }

        let filteredSearch = [];

        for (const ticket of originalResult.tickets) { 
            if ((formData.selectedManager === "" || formData.selectedManager === ticket.manager) &&
                (formData.selectedProduct === "" || formData.selectedProduct === ticket.product) &&
                (formData.selectedVersion === "" || formData.selectedVersion === ticket.version) &&
                //(formData.selectedFromDate === "" || new Date(fromDate).getTime() <= new Date(formatDateYYYYMMDD(ticket.created_At)).getTime()) &&
                //(formData.selectedToDate === "" || new Date(toDate).getTime() >= new Date(formatDateYYYYMMDD(ticket.created_At)).getTime()) &&
                (formData.selectedStatus === "" || status === ticket.status)) {
                filteredSearch.push(ticket);
            }
        }
        setTickets(filteredSearch);
    };

    const sort = (event) => {
        event.preventDefault();
        const direction = event.target.value;

        if (direction.trim() === "asc") {
            const sortByAsc = (a, b) => new Date(utils.formatDateYYYYMMDD(a.created_At)) - new Date(utils.formatDateYYYYMMDD(b.created_At));
            const sortedTickets = [...tickets].sort(sortByAsc);
            setTickets(sortedTickets);
        } else if (direction === "desc") {
            const sortByDesc = (a, b) => new Date(utils.formatDateYYYYMMDD(b.created_At)) - new Date(utils.formatDateYYYYMMDD(a.created_At));
            const sortedTickets = [...tickets].sort(sortByDesc).map(x => x);
            setTickets(sortedTickets);
        } else {
            setTickets(tickets); // Setter tickets med ev. utvalgskriterier.
        }    
    };

    
    return (
        <div className='container'>
            <SearcBar
                setSearchTermState={setSearchTermState}
                setIsSearching={setIsSearching}
                addTickets={addTickets}
                term={searchTerm}
                clear={clearTickets} />
            <SideBar
                sort={sort}    
                selectedManager={formData.selectedManager}
                selectedProduct={formData.selectedProduct}
                selectedVersion={formData.selectedVersion}
                selectedFromDate={formData.selectedFromDate}
                selectedToDate={formData.selectedToDate}
                selectedStatus={formData.selectedStatus}
                onSelectChange={handleSelectChange}
                onReset={handleReset}
                products={products}
                versions={versions}
                data={managers}
                filterTheResult={filterTheResult}
            />
            {                
                //hasContent === true &&

                //<MainContent
                //    header={originalResult.header}
                //    profiles={tickets}
                //    term={formData.searchTerm}
                //    />

            }  
            <MainContent
                header={originalResult.header}
                profiles={tickets}
                term={searchTerm}
                isSearching={isSearching}                
                    />
        </div>
    );
};


export default App;