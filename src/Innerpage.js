import React, {useState} from "react";
import Todoitem from "./Todoitem";
import Control from "./Control";
import Header from "./Header";
function Innerpage(){
    const [list, setList]=useState([]);
    const [value, setValue]=useState("");
    function handleAdd(){
        const timestamp=(new Date).getTime();
        setList((prev)=>[...prev, {value:value,id:`${timestamp}`}]);
        setValue('');
    }
    function handleInputChange(e){
        setValue(e.target.value);
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
                <Control handleAdd={handleAdd} handleInputChange={handleInputChange} value={value}/>
                <div className="Todolist-container">
                    {list.map((todo, index)=><Todoitem key={`${index}_${todo.id}`} todo={todo} handleRemove={handleRemove}/>)}
                </div>
            </div>
        </div>
    );
}
export default Innerpage;