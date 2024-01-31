import React from "react";
import Case from "./Case.js";

const Cases = (props) => {
    return (
        <div>
            {props.profiles.map((profile) => <Case key={profile.id} {...profile} />)}
        </div>
    );
};
export default Cases;