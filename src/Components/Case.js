import React from "react";

const Case = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td><a href="*">{props.title}</a></td>
            <td>{props.createdAt}</td>
            <td>{props.customer}</td>
        </tr>
    );
};

export default Case;