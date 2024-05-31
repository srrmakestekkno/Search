import React from "react";
import utils from "../utils.js";
import Spinner from "./Spinner.js";

const TableData = (props) => {
    const URL = "https://online2.superoffice.com/Cust25129/CS/scripts/ticket.fcgi?_sf=0&action=doScreenDefinition&idString=viewTicket_80_v2&entryId=";
    let content = props.content;
    return (            
        <div className='row'>
            <table>
                <thead>
                    <tr>
                        <th>Linje</th>
                        <th>Emne</th>
                        <th>Forvalter</th>
                        <th>Firma</th>
                        <th>Opprettet</th>
                        <th>PBI</th>
                        <th>Eier</th>
                        <th>Er aktiv</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((item, i) => {
                        return <tr key={item.id}>
                            <td>{++i}</td>
                            <td>
                                <a href={`${URL}${item.id}`}
                                    onClick={e => props.handleClickedLink(item.id)}
                                    style={{ color: props.clickedLinks[item.id] ? 'red' : 'blue'}}
                                    target="_blank"
                                    rel="noreferrer">
                                    <div>
                                        {item.title}
                                    </div>
                                </a>
                            </td>
                            <td>{item.manager}</td>
                            <td>{item.company}</td>
                            <td>{utils.formatDate(item.created_At)}</td>
                            <td>{item.pbi}</td>
                            <td>{item.owner}</td>
                            <td>{item.status === 1 ? "Aktiv" : "Avsluttet"}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>   
    );    
};

const HeaderInfo = (props) => {
    return (
        <div className="row">
            <h2>{props.message}</h2>
        </div>
    );
};

const MainContent = (props) => {
    const isSearching = props.isSearching;
    const profilesLength = props.profiles.length;    
    
    if (profilesLength > 0) {
        return (
            <div className="content">
                <HeaderInfo message={`${props.header}`} />
                <TableData
                    clickedLinks={props.clickedLinks}
                    handleClickedLink={props.handleClickedLink}
                    content={props.profiles} />
            </div>            
        );
    }
    if (isSearching) {
        return (
            <div className="content">
                <HeaderInfo message={`Søker etter ${props.term}`} />
                <Spinner />
            </div>
        );
    }

    if (!isSearching && profilesLength === 0 && props.header !== "") {
        return (
            <div className="content">
                <HeaderInfo message={props.header} />
            </div>
        );
    }
};
export default MainContent;