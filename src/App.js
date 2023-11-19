import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./projects/AllProjects";
import FrontPage from "./front/FrontPage";
import Training from "./Training/Training";
import Articles from "./Articles/Articles";
export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/trainings" element={<Training />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/*" element={<FrontPage />} />
            </Routes>
        </BrowserRouter>
    )
}