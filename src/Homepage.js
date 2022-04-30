import React from "react";
import Header from "./Header";
function Welcome(){
    return (
        <main className="main-container">
            <div>
                Welcome to the Todolist
            </div>
        </main>
    );
}
function Homepage(){
    return(
        <div>
            <Header />
            <Welcome />
        </div>
    );
}
export default Homepage;