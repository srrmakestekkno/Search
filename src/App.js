import React, { useEffect, useState } from "react";
import SideBar from "./Components/SideBar.js";
import SearcBar from "./Components/SearchBar.js";
import MainContent from "./Components/MainContent.js";
import './custom.css';
import Spinner from "./Components/Spinner.js";

const App = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const defaultFormData = {
        "selectedManager": "",
        "selectedProduct": "",
        "selectedVersion": "",
        "selectedFromDate": "",
        "selectedToDate": "",
        "selectedStatus": ""
    };
    const [formData, setFormData] = useState(defaultFormData);

    // Saker
    const [tickets, setTickets] = useState([]);
    const [originalResult, setOriginalResult] = useState([]);  

    // for å vise <MainContent etter resultat
    const [hasContent, setHasContent] = useState(false);

    // Dropdowns
    const [managers, setManagers] = useState([]); // Unike Forvaltere som finnes i søket.
    const [products, setProducts] = useState([]); // Unike produkter som finnes i søket.
    const [versions, setVersions] = useState([]); // Unike versjoner som finnes i søket.

    const addTickets = (profileData) => {
        setOriginalResult(profileData.tickets); // endre til opprinnelig objekt som har header
        setTickets(profileData.tickets);
        setManagers(profileData.companies);
        setProducts(profileData.products);
        setVersions(profileData.versions)
        setHasContent(!hasContent);
    };

    const handleSelectChange = (name, selectedValue) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: selectedValue
        }));
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormData(defaultFormData);
        setTickets(originalResult);
    };

    // Flytte til utils
    const formatDate = (value) => {
        const inputDate = new Date(value);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const year = inputDate.getFullYear().toString();
        const hours = inputDate.getHours().toString().padStart(2, '0');
        const minutes = inputDate.getMinutes().toString().padStart(2, '0');

        const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
        return formattedDate;
    }; 

    // utils
    const formatDateYYYYMMDD = (value) => {
        const inputDate = new Date(value);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const year = inputDate.getFullYear().toString();

        const formattedDate = `${year}/${month}/${day}`;
        return formattedDate;
    };
    

    const filterTheResult = (event) => {        
        event.preventDefault();
        let fromDate = "";
        if (formData.selectedFromDate !== "") {
            const formattedFromDate = new Date(formatDateYYYYMMDD(formData.selectedFromDate));
            fromDate = formattedFromDate;
        }

        let toDate = "";
        if (formData.selectedToDate !== "") {
            const formattedToDate = new Date(formatDateYYYYMMDD(formData.selectedToDate));
            toDate = formattedToDate;
        }
        
        let status = "";
        if (formData.selectedStatus !== "") {
            status = formData.selectedStatus === "active" ? 1 : 2;
        }

        let filteredSearch = [];

        for (const ticket of originalResult) { 
            if ((formData.selectedManager === "" || formData.selectedManager === ticket.manager) &&
                (formData.selectedProduct === "" || formData.selectedProduct === ticket.product) &&
                (formData.selectedVersion === "" || formData.selectedVersion === ticket.version) &&
                (formData.selectedFromDate === "" || new Date(fromDate).getTime() <= new Date(formatDateYYYYMMDD(ticket.created_At)).getTime()) &&
                (formData.selectedToDate === "" || new Date(toDate).getTime() >= new Date(formatDateYYYYMMDD(ticket.created_At)).getTime()) &&
                (formData.selectedStatus === "" || status === ticket.status)) {
                filteredSearch.push(ticket);
            }
        }
        setTickets(filteredSearch);
    };

    // sorter etter valgt kriterie
    // stigende
    const sortByDateAsc = () => {
        const test = tickets.sort(function (a, b) {
            let dateA = new Date(a);
            let dateB = new Date(b);

            return dateA - dateB;
        });
    };

    const sortByDateDesc = () => {
        const test = tickets.sort(function (a, b) {
            let dateA = new Date(a);
            let dateB = new Date(b);

            return dateB - dateA;
        });
    };

    return (
        <div className='container'>
            <SearcBar addTickets={addTickets} />
            <SideBar
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
                hasContent === true &&
                    <MainContent profiles={tickets} dateFormatter={formatDate} />
            }   
        </div>
    );
};


export default App;