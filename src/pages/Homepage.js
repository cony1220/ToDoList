import React from "react";
import Header from "../components/Header";
import Btn from "../components/Btn";
import Welcome from "../components/Welcome";
import {Link} from "react-router-dom";
function Homepage(){
    return(
        <>
            <Header />
            <Welcome />
            <Btn content="Enter" page="/list" />
        </>
    );
}
export default Homepage;