import React from "react";
import Dsak from "./Dsak.js";

const DsakList = (props) => (
    <div>
        {props.profiles.map(profile => <Dsak key={profile.id} {...profile} />)}
    </div>
);

export default DsakList;