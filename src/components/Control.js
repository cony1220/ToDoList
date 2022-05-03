import React from "react";
function Control(props){
    return(
        <div>
            <input type="text" placeholder="add item..." value={props.value} onChange={props.handleInputChange}/>
            <button onClick={props.handleAdd}>Add</button>
        </div>
    );
}
export default Control;