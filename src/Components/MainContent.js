import React from "react";
import DsakList from "./DsakList";

const MainContent = (props) => {
    var content = props.profiles;
    return (
        <div className="content">
            <h1>Main Content Area</h1>
            <div className='row'>
                <table className="content">
                    <DsakList profiles={content} />
                    {/* <table className='content'>
      
      <tr className='row'>
        <td>1</td>
        <td>lasdkjldjkljasd</td>
        <td>12.02.2023, 13:20</td>
        <td>Oslo Universitetssykehus HF</td>
        <td><a>45673</a></td>
      </tr>
    </table> */}
                </table>
            </div>
        </div>
    );
};
export default MainContent;