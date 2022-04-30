import React, {useState} from "react";
import Header from "./Header";
function Innerpage(){
    const [list, setList]=useState([]);
    const [value, setValue]=useState("");
    function Add(){
        const timestamp=(new Date).getTime();
        setList((prev)=>[...prev, {value:value,id:`${timestamp}`}]);
        setValue('');
    }
    function handleInputChange(e){
        setValue(e.target.value);
    }
    function Item(props){
        return(
            <div className="item-container">
                <span>{props.content}</span>
                <button id={props.id} onClick={handleRemove}>Delete</button>
            </div>
        );
    }
    function handleRemove(e){
        const id=e.target.id;
        const newList=list.filter(item=>item.id!==id);
        setList(newList);
    }
    return(
        <div>
            <Header />
            <div className="content-container">
                <div>
                    <input type="text" placeholder="add item..." value={value} onChange={handleInputChange}/>
                    <button onClick={Add}>Add</button>
                </div>
                <div className="Todolist-container">
                    {list.map((todo, index)=><Item key={`${index}_${todo.id}`} id={todo.id} content={todo.value}/>)}
                </div>
            </div>
        </div>
    );
}
export default Innerpage;