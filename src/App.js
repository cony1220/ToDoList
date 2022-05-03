import React, {useState} from "react";
import Homepage from "./pages/Homepage";
import Innerpage from "./pages/Innerpage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/list" element={<Innerpage/>} />
            </Routes>
        </Router>
    );
}
export default App;
