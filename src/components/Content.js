import React, {useState, useEffect} from "react";
import Todoitem from "./Todoitem";
import Control from "./Control";
import {db} from "../firebaseConfig";
import {collection, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
function Content(){
    const [list, setList]=useState([]);
    const [value, setValue]=useState("");
    useEffect(()=>{
        onSnapshot(collection(db, "todolist"), (snapshot)=>{
            setList(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})));
        })
    }, []);
    const handleAdd=async()=>{
        try{
            const timestamp=(new Date).getTime();
            const docRef=doc(db, "todolist", `${timestamp}`);
            const payload={content:value};
            await setDoc(docRef, payload);
            console.log("Document written with ID: ", docRef.id);
        } catch (e){
            console.error("Error adding document ", e)
        }
        setValue('');
    }
    const handleInputChange=(e)=>{
        setValue(e.target.value);
    }
    const handleRemove=async(e)=>{
        const docRef=doc(db, "todolist", e.target.id);
        await deleteDoc(docRef);
    }
    return(
        <div className="content-container">
            <Control handleAdd={handleAdd} handleInputChange={handleInputChange} value={value}/>
            <div className="Todolist-container">
                {list.map((todo, index)=><Todoitem key={`${todo.id}`} todo={todo} handleRemove={handleRemove}/>)}
            </div>
        </div>
    );
}
export default Content;
