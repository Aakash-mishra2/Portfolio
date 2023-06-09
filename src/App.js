import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./projects/AllProjects";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllProjects />} />
            </Routes>
        </BrowserRouter>
    )
}