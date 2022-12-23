import React from "react"
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import Result from "./pages/result"

export default function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/result" element={<Result/>} />
                </Routes>
            </Router>       
        </div>
    )
}