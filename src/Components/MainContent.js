import React, { useState } from "react";
import SortBy from "./SortBy.js";

const MainContent = (props) => {
    let content = props.profiles;
    
    return (
        <div className="content">
            <div>
            {/*Vises melding om feil, ikke funnet, eller antall saker som ble funnet.*/}
                <h1>Resultat</h1>
            </div>

            <SortBy sortBy={props.sortBy} />
            <div className='row'>
                <table>
                    <thead>
                        <tr>
                            <th>Linje</th>
                            <th>Dsak</th>
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
                                <td>{item.id}</td>
                                <td><a href={`https://online2.superoffice.com/Cust25129/CS/scripts/ticket.fcgi?_sf=0&action=doScreenDefinition&idString=viewTicket_80_v2&entryId=${item.id}`} target="_blank"><div>{item.title}</div></a></td>
                                <td>{item.manager}</td>
                                <td>{item.company}</td>
                                <td>{props.dateFormatter(item.created_At)}</td>
                                <td>{item.pbi}</td>
                                <td>TODO</td>
                                <td>{item.status === 1 ? "Aktiv" : "Avsluttet"}</td>
                            </tr>
                        }) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MainContent;

const utils = {
    sortByDescendingDate: (selectedValue) => {
        
    },
    sortByAscendingDate: (selectedValue) => {
        
    },
    sortByManager: (selectedValue) => {
        
        
    },
    sortByCompany: (selectedValue) => {
        
    },
    sortByActive: (selectedValue) => {
        
    },
    sortByClosed: (selectedValue) => {
        
    }
};