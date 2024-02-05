import React, { useState } from "react";
import SideBar from "./Components/SideBar.js";
import SearcBar from "./Components/SearchBar.js";
import MainContent from "./Components/MainContent.js";
import './custom.css';
import utils from "./utils.js";

const App = () => {
    const defaultFormData = {
        "selectedManager": "",
        "selectedCompany": "",
        "selectedProduct": "",
        "selectedVersion": "",
        "selectedFromDate": "",
        "selectedToDate": "",
        "selectedStatus": "",
        "searchTerm": ""
    };
    
    const [isFrontChecked, setIsFrontChecked] = useState(false); // Parameter as header to the API.
    const [searchTerm, setSearchTermState] = useState(""); // The search string.
    const [formData, setFormData] = useState(defaultFormData); // For resetting filters to empty values.    
    const [tickets, setTickets] = useState([]); // Cases shown.
    const [originalResult, setOriginalResult] = useState({}); // Save it in memory for resetting filters.
    const [isSearching, setIsSearching] = useState(false); // Progress bar.

    // Dropdowns
    const [managers, setManagers] = useState([]); // Unique managers in the result.
    const [companies, setCompanies] = useState([]); // Unique companies in the result.
    const [products, setProducts] = useState([]); // Unique products in the result.
    const [versions, setVersions] = useState([]); // Unique versions in the result.
    

    const addTickets = (profileData) => {
        setOriginalResult(profileData);

        if (profileData.tickets.length > 0) {          
            setTickets(profileData.tickets);
            setManagers(profileData.managers);
            setCompanies(profileData.companies);
            setProducts(profileData.products);
            setVersions(profileData.versions)
            setIsSearching(false);
        }        
    };

    // Used for every new request.
    const clearTickets = () => {
        setOriginalResult({});
        setTickets([]);
        setManagers([]);
        setCompanies([]);
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

    // Reset button.
    const handleReset = (e) => {
        e.preventDefault();
        setFormData(defaultFormData);
        if (originalResult.tickets !== undefined) {
            setTickets(originalResult.tickets);
            setManagers(originalResult.managers);
            setCompanies(originalResult.companies)
            setProducts(originalResult.products);
            setVersions(originalResult.versions);
        }
    }; 

    // Dropdown onClick event.
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
        let tempManagersMap = new Map();
        let tempCompaniesMap = new Map();
        let tempProductsMap = new Map();
        let tempVersionsMap = new Map();      
        
        for (const ticket of originalResult.tickets) { 
            if ((formData.selectedManager === "" || formData.selectedManager === ticket.manager) &&
                (formData.selectedCompany === "" || formData.selectedCompany === ticket.company) &&
                (formData.selectedProduct === "" || formData.selectedProduct === ticket.product) &&
                (formData.selectedVersion === "" || formData.selectedVersion === ticket.version) &&                
                (formData.selectedStatus === "" || status === ticket.status)) {

                filteredSearch.push(ticket);

                if (!tempManagersMap.has(ticket.manager_Id)) {
                    tempManagersMap.set(ticket.manager_Id, ticket.manager);
                }

                if (!tempCompaniesMap.has(tickets.company_Id)) {
                    tempCompaniesMap.set(ticket.company_Id, ticket.company);
                }

                if (!tempProductsMap.has(ticket.id)) {
                    tempProductsMap.set(ticket.product_Id, ticket.product);
                }

                if (!tempVersionsMap.has(ticket.version_Id)) {
                    tempVersionsMap.set(ticket.version_Id, ticket.version);
                }    
            }
        }
                
        setTickets(filteredSearch);
        populateDropdown(tempManagersMap, tempCompaniesMap, tempProductsMap, tempVersionsMap);              
    };

    const populateDropdown = (tempManagersMap, tempCompaniesMap, tempProductsMap, tempVersionsMap) => {
        const populateManagers = () => {
            return new Promise((resolve, reject) => {
                setManagers(Array.from(tempManagersMap, ([key, value]) => ({ id: key, managerName: value })));
                resolve();
            });
        };

        const populateCompanies = () => {
            return new Promise((resolve, reject) => {
                setCompanies(Array.from(tempCompaniesMap, ([key, value]) => ({ id: key, companyName: value })));
                resolve();
            });
        };

        const populateProducts = () => {
            return new Promise((resolve, reject) => {
                setProducts(Array.from(tempProductsMap, ([key, value]) => ({ id: key, productName: value })));
                resolve();
            });
        };

        const populateVersion = () => {
            return new Promise((resolve, reject) => {
                setVersions(Array.from(tempVersionsMap, ([key, value]) => ({ id: key, name: value })));
                resolve();
            });
        };

        Promise.all([populateManagers(), populateCompanies(), populateProducts(), populateVersion()]); 
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
            setTickets(tickets);
        }    
    };
    
    
    return (
        <div className='container'>
            <SearcBar
                checkHandler={setIsFrontChecked}
                isFrontChecked={isFrontChecked}
                setSearchTermState={setSearchTermState}
                setIsSearching={setIsSearching}
                addTickets={addTickets}
                term={searchTerm}
                clear={clearTickets} />
            <SideBar
                sort={sort}
                selectedManager={formData.selectedManager}
                selectedCompany={formData.selectedCompany}
                selectedProduct={formData.selectedProduct}
                selectedVersion={formData.selectedVersion}
                selectedFromDate={formData.selectedFromDate}
                selectedToDate={formData.selectedToDate}
                selectedStatus={formData.selectedStatus}
                onSelectChange={handleSelectChange}
                onReset={handleReset}
                managers={managers}
                companies={companies}
                products={products}
                versions={versions}                
                filterTheResult={filterTheResult}
            />  
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