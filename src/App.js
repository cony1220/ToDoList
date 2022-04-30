import React, {useState} from "react";
import Homepage from "./Homepage";
import Innerpage from "./Innerpage";
function Btn(props){
    function handleBtn(){
        props.setHome(current=>!current);
    }
    let word;
    if(props.isHomepage){
        word="Enter";
    }else{
        word="Back";
    }
    return (
        <div className="btn-container">
            <button onClick={handleBtn}>{word}</button>
        </div>
    );
}
function Currentpage(props){
    if(props.isHomepage){
        return <Homepage />
    }else{
        return <Innerpage />
    }
}
function App(){
    const [isHome,setHome]=useState(true);
    return (
        <div>
            <Currentpage isHomepage={isHome}/>
            <Btn isHomepage={isHome} setHome={setHome}/>
        </div>
    );
}
export default App;
