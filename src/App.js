import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./projects/AllProjects";
import FrontPage from "./front/FrontPage";
export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/" element={<FrontPage />} />
            </Routes>
        </BrowserRouter>
    )
}