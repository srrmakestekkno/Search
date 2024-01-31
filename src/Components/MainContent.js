import React, { useState } from "react";
import utils from "../utils.js";

const URL = "https://online2.superoffice.com/Cust25129/CS/scripts/ticket.fcgi?_sf=0&action=doScreenDefinition&idString=viewTicket_80_v2&entryId=";

const MainContent = (props) => {
    let content = props.profiles; 
    if (!props.isSearching && content.length > 0) {
        return (
            <div className="content">
                <div>
                    <h1>{props.header}</h1>
                </div>
                <div className='row'>
                    <table>
                        <thead>
                            <tr>
                                <th>Linje</th>
                                <th>Dsak</th>
                                <th>Emne</th>
                                <th>Produkt</th>
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
                                    <td><a href={`${URL}${item.id}`} target="_blank"><div>{item.title}</div></a></td>
                                    <td>{item.product}</td>
                                    <td>{item.manager}</td>
                                    <td>{item.company}</td>
                                    <td>{utils.formatDate(item.created_At)}</td>
                                    <td>{item.pbi}</td>
                                    <td>TODO</td>
                                    <td>{item.status === 1 ? "Aktiv" : "Avsluttet"}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else if (props.isSearching) {
        return (
            <div className="content">
                <div>
                    {/*Vises melding om feil, ikke funnet, eller antall saker som ble funnet.*/}
                    <h1>Søker i dsak etter {props.term}</h1>
                </div>
                <div className='progress'>
                    <div className="indeterminate"></div>
                </div>
            </div>
        );
    }
    
};
export default MainContent;