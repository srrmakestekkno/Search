import React from "react";

const Dsak = (props) => (
    <tr className='row'>
        <td>{props.id}</td>
        <td><a href="*">{props.title}</a></td>
        <td>{props.registeredDate}</td>
        <td>{props.customer}</td>
        <td><a href="*">{props.azure}</a></td>
    </tr>
);

export default Dsak;