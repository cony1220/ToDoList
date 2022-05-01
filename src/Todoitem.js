import React from "react";
function Todoitem(props){
    return(
        <div className="item-container">
            <span>{props.todo.value}</span>
            <button id={props.todo.id} onClick={props.handleRemove}>Delete</button>
        </div>
    );
}
export default Todoitem;