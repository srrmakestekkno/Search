import React, { useState } from "react";
import SideBar from "./Components/SideBar.js";
import SearcBar from "./Components/SearchBar.js";
import MainContent from "./Components/MainContent.js";
import './custom.css';
import FromDate from "./Components/FromDate.js";



const utils = {
    formatDate: (dateString) => {

    }
};

const App = () => {
    // Saker
    const [tickets, setTickets] = useState([]);
    const [originalResult, setOriginalResult] = useState();


    // for å vise <MainContent ette resultat
    const [hasContent, setHasContent] = useState(false);

    // Forvalter
    const [managers, setManagers] = useState([]); // unike Forvaltere som finnes i søket

    // Produkter
    const [originalProductList, setOriginalProductList] = useState([]);
    const [products, setProducts] = useState([]); // unike produkter som finnes i søket

    const [companiesIsFiltered, setCompaniesIsFiltered] = useState(false);

    const [selectedManager, setSelectedManager] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const addTickets = (profileData) => {   
        setOriginalResult(profileData);
        setTickets(profileData.tickets);

        setManagers(profileData.companies);

        setOriginalProductList(profileData.products);
        setProducts(profileData.products);   

        setHasContent(!hasContent);

        
    }; 

    // Todo: Fikse filtrering basert på listen som vises
    // F.eks. Er det filtrert på sykehuspartner så bør produkt filtrers i denne listen, og produkter som vises i dropdown bør kun være i visningen
    
    const filterByManager = (value) => {
        if (value.trim() === "") {
            setCompaniesIsFiltered(false);
            setSelectedManager(value);
            if (selectedProduct === "") {
                setTickets(originalResult.tickets);
                setProducts(originalProductList);
            } else {
                // vis listen basert på produktfiltrering
                let filteredSearchByProduct = [];
                let tempTickets = originalResult.tickets;
                // går gjennom alle tickets med valgt produkt
                for (let i = 0; i < tempTickets.length; i++) {
                    const tempTicket = tempTickets[i];
                    if (tempTicket.product === selectedProduct) {
                        filteredSearchByProduct.push(tempTicket);
                    }
                }
                setTickets(filteredSearchByProduct);
                setProducts(originalProductList);
            }
        } else {
            setSelectedManager(value);
            setCompaniesIsFiltered(true);
            if (selectedProduct !== "") {
                // vis listen basert på valgt produkt
                let filteredSearchByProduct = [];
                let tempTickets = originalResult.tickets;
                // går gjennom alle tickets med valgt produkt
                for (let i = 0; i < tempTickets.length; i++) {
                    const tempTicket = tempTickets[i];
                    if (tempTicket.product === selectedProduct) {
                        filteredSearchByProduct.push(tempTicket);
                    }
                }
                setTickets(filteredSearchByProduct);
            } else {
                const filteredByManagers = originalResult.tickets.filter(ticket => ticket.manager === value);
                setTickets(filteredByManagers);
                let updatedProductList = [];

                for (let i = 0; i < originalProductList.length; i++) {
                    const product = originalProductList[i];
                    if (filteredByManagers.find(p => p.product === product.productName)) {
                        updatedProductList.push(product);
                    }
                }
                setTickets(filteredByManagers);
                setProducts(updatedProductList);
            }                       
        }        
    };

    const filterByProduct = (input) => {
        if (input.trim() === "") {
            if (selectedManager !== "") {
                 // hvis listen basert på nåværende liste med filtrering på forvalter
                let tempTickets = [];
                for (let i = 0; i < tempTickets.length; i++) {
                    const tempTicket = tempTickets[i];
                    if (tempTicket.product === input) {
                        tempTickets.push(tempTicket);
                    }
                }
                setTickets(tempTickets);
            } else {
                setTickets(originalResult.tickets);
                setSelectedProduct(input);
            }
            
        } else {
            setSelectedProduct(input);
            if (companiesIsFiltered) {
                // filtrer i søket
                
            } else {
                
            }
            const filteredSearch = originalResult.tickets.filter(ticket => ticket.product === selectedProduct);
            setTickets(filteredSearch);            
        }
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
            
    const filterFromDate = (startDate) => { };

    const filterToDate = (date) => { };

    const handleSort = (selectedValue) => { };

    const handleSelectedStatus = (status) => {
        if (status.trim() !== "") {
            const value = status === "active" ? 1 : 2;
            var res = originalResult.tickets.filter(item => item.status === value);
            setTickets(res);
        } else {
            setTickets(originalResult.tickets);
        }
    };


    return (
        <div className='container'>
            <SearcBar addTickets={addTickets} />
            <SideBar
                products={products}
                data={managers}
                onSelectedFromDate={filterFromDate}
                onSelectedToDate={filterToDate}
                onSelectedCompany={filterByManager}
                onSelectedProduct={filterByProduct}
                onSelectedStatus={handleSelectedStatus}
            />
            {
                hasContent === true && 
                <MainContent sortBy={handleSort} profiles={tickets} dateFormatter={formatDate} />
            }               
            
        </div>
    );
};
export default App;