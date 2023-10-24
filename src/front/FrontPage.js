import FrontList from "./components/FrontList";
import prj from '../icons/project-management.png';
import rsl from '../icons/results.png';
import mlt from '../icons/multitasking.png';
import trg from '../icons/online-learning.png';
import React from "react";
export default function FrontPage() {
    const CARDS = [
        {
            id: 'projects',
            name: "My Projects",
            linkTo: '/projects',
            icon: prj
        },
        {
            id: 'trainings',
            name: "My trainings and Certifications",
            linkTo: "/trainings",
            icon: trg
        },
        {
            id: 'articles',
            name: "Articles and More..",
            linkTo: "/articles",
            icon: mlt
        },
        {
            id: 'extras',
            name: "Marksheets",
            linkTo: 'https://www.ipuranklist.com/student/00214802720',
            icon: rsl
        }
    ]

    return (
    <React.Fragment>
    <div className="max-w-7xl mx-auto mb-4">
    <h1 className="text-4xl font-bold text-black font-serif mt-10 ml-30">
        <tt>Hey 👋, I'm Aakash Mishra</tt>
    </h1>
    <p className="text-2xl  font-bold  text-gray-600 font-serif "><tt>
        I am a CSE undergraduate and do Full Stack Web development using 
        Javascript, React, Next, Redux, tailwindcss, HTML, Node.js and More. I have good understanding of 
        Object oriented Design and analysis using C++ Data structure and Algorithms.
    </tt></p>
    </div>
    <div className="full-container">
    <FrontList cards={CARDS} />
    </div>
    </React.Fragment>
    )
}