import React from "react";
import {useNavigate} from "react-router-dom";
function Btn(props){
    const navigate=useNavigate();
    return (
        <div className="btn-container">
            <button onClick={()=>navigate(`${props.page}`)}>{props.content}</button>
        </div>
    );
}
export default Btn;