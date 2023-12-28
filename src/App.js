import React, { useState } from "react";
import SideBar from "./Components/SideBar.js";
import SearcBar from "./Components/SearchBar.js";
import MainContent from "./Components/MainContent.js";
import './custom.css';


const Search = (searchTerm) => {
    // get search terms
    // call api
    // include filters if any (check)
    // list all data


};

const PopulateCustomer = () => {

};

const PopulateProducts = () => {
    
};


//const DsakList = (props) => (
//    <div>
//        {props.profiles.map(profile => <Dsak key={profile.id} {...profile} />)}
//    </div>
//);


//const Dsak = (props) => (
//    <tr className='row'>
//        <td>{props.id}</td>
//        <td><a href="*">{props.title}</a></td>
//        <td>{props.registeredDate}</td>
//        <td>{props.customer}</td>
//        <td><a href="*">{props.azure}</a></td>
//    </tr>
//);

//const SearcBar = (props) => {   
//    const handleFormEvent = async (event) => {
//        const searchTerm = event.target.value;
//        if (event.key === "Enter" && searchTerm.trim() !== "") {
//            event.preventDefault();            
//            // feilhåndtering
//            const res = await fetch("stian");
//            const data = await res.json();
//            props.keepHistory(data);
//            props.onSubmit(data);
//        }
//    };

//    return (
//        <header>
//            <nav className="fixed-navbar">
//                <div className="navbar">
//                    <div className="logo">Your Logo</div>
//                    <div className="search">
//                        <SearchForm onChange={handleFormEvent} />
//                    </div>
//                </div>
//            </nav>
//        </header>
//    );
//};

//const CustomerDropDown = props => {
//    const handleSelectedValue = (event) => {
//        var value = event.target.value;
//        props.onChange(value);
//    };

//    return (
//        <div className='hf'>
//            <label>Velg foretak</label>
//            <select onChange={handleSelectedValue}>
//                <option value="">-- Velg foretak --</option>
//                <option value="Sykehuspartner">Sykehuspartner</option>
//                <option value="Betanien">Betanien</option>
//            </select>
//        </div>
//    );
//};

//const SideBar = (props) => {  
//    const handleSelect = (value) => {
//        const data = props.data.filter(x => x.customer === value);        
//        if (value.trim() === "") {
//            props.originalResult();
//        } else {
//            props.onChange(data);
//        }
        
//    };

//    return (
//        <aside className="sidebar">
//            <CustomerDropDown onChange={handleSelect} />
//            <FromDate />
//            <ToDate />
//            <Product />
//            <Municipal />
//        </aside>
//    );
//};

//const SearchForm = (props) => {
//    return (
//        <form>
//            <input
//                onKeyDown={props.onChange}
//                type="text"
//                placeholder="Søk i saker..."
//                required />
//        </form>
//    );
//};

//const Municipal = () => {
//    const [isChecked, setIsChecked] = useState(false);

//    const handleCheckBoxChange = () => {
//        setIsChecked(!isChecked); // Toggle the checkbox state
//    };
//    return (
//        <div style={{ margin: 5 }}>
//            <form>
//                <label for="municipal">Inkluder kommune i søket</label>
//                <input
//                    type="checkbox"
//                    onChange={handleCheckBoxChange}
//                    id="municipal_id"
//                    checked={isChecked} />
//            </form>
//        </div>
//    );
//};

//const Product = () => {
//    return (
//        <div className="products">
//            <form>
//                <label for="products">Velg produkt</label>
//                <select name="products" id="products_id">
//                    <option disabled selected value>--- velg produkt ---</option>
//                    <option value="Dokumentlist1">Dokumentlist1</option>
//                    <option value="Dokumentlist2">Dokumentlist2</option>
//                    <option value="Dokumentlist3">Dokumentlist3</option>
//                    <option value="Dokumentlist4">Dokumentlist4</option>
//                </select>
//            </form>
//        </div>
//    );
//};

//const FromDate = () => {
//    return (
//        <div className="date">
//            <label>Fra dato</label>
//            <input type="date" id="fromDate" name="from_date" />
//        </div>
//    );
//};

//const ToDate = () => {
//    return (
//        <div className="date">
//            <label>Til dato</label>
//            <input type='date' id="toDate" name="to_date" />
//        </div>
//    );
//};

//const MainContent = (props) => {
//    var content = props.profiles;
//    return (
//        <div className="content">
//            <h1>Main Content Area</h1>
//            <div className='row'>
//                <table className="content">
//                    <DsakList profiles={content} />
//                    {/* <table className='content'>
      
//      <tr className='row'>
//        <td>1</td>
//        <td>lasdkjldjkljasd</td>
//        <td>12.02.2023, 13:20</td>
//        <td>Oslo Universitetssykehus HF</td>
//        <td><a>45673</a></td>
//      </tr>
//    </table> */}
//                </table>
//            </div>
//        </div>
//    );
//};
var history;
const App = () => {
    const [profiles, setProfiles] = useState([]);    
    
    // endre navn på funksjon
    const addNewProfile = (profileData) => {
        setProfiles(profileData);       
    }; 

    const setMainResult = (data) => {
        history = data;
    };

    const useHistory = () => {
        setProfiles(history);
    };

    return (
        <div className='container'>
            <SearcBar onSubmit={addNewProfile} keepHistory={setMainResult} />
            <SideBar data={history} onChange={addNewProfile} originalResult={useHistory} />
            <MainContent profiles={profiles} />
        </div>
    );
};

export default App;

//const App = () => {
//    const displayName = App.name;


//    const [state, setState] = useState({ forecasts: [], loading: true });

//    const componentDidMount = () => {
//        populateWeatherData();
//    };

//    const renderForecastsTable = (forecasts) => {
//        return (
//            <table className='table table-striped' aria-labelledby="tabelLabel">
//                <thead>
//                    <tr>
//                        <th>Date</th>
//                        <th>Temp. (C)</th>
//                        <th>Temp. (F)</th>
//                        <th>Summary</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {forecasts.map(forecast =>
//                        <tr key={forecast.date}>
//                            <td>{forecast.date}</td>
//                            <td>{forecast.temperatureC}</td>
//                            <td>{forecast.temperatureF}</td>
//                            <td>{forecast.summary}</td>
//                        </tr>
//                    )}
//                </tbody>
//            </table>
//        );
//    }

    
//        let contents = this.state.loading
//            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//            : renderForecastsTable(state.forecasts);

//        return (
//            <div>
//                <h1 id="tabelLabel" >Weather forecast</h1>
//                <p>This component demonstrates fetching data from the server.</p>
//                {contents}
//            </div>
//        );
    

//    const populateWeatherData = async () => {
//        const response = await fetch('stian');
//        const data = await response.json();
//        setState({ forecasts: data, loading: false });
//    }
//}
