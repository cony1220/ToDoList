import React from "react";
import Header from "../components/Header";
import Btn from "../components/Btn";
import Content from "../components/Content";
function Innerpage(){
    return(
        <>
            <Header />
            <Content />
            <Btn content="Back" page="/" />
        </>
    );
}
export default Innerpage;