import FrontItem from "./components/FrontItem";
import { Link } from "react-router-dom";
import prj from '../icons/project-management.png';
import rsl from '../icons/results.png';
import mlt from '../icons/multitasking.png';
import trg from '../icons/online-learning.png';
import React from "react";
import './styles/FrontList.css'; 
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
        <div className="max-w-7xl mx-auto ml-24 mb-4 mr-8">
            <h1 className="text-4xl font-bold text-black font-serif mt-10 ml-30 mb-4">
                <tt>Hey 👋, I'm Aakash Mishra</tt>
            </h1>
            <p className="text-2xl font-bold  text-gray-600 font-serif "><tt>
                I am a CSE undergraduate and I do Full Stack Web development using
                Javascript, React, Next, Redux, tailwindcss, HTML, Node.js and More.
                I love core programming by Object Oriented Design using C++ STL, Data structures and Algorithms. 
            </tt></p>
            <div className=" front ml-2 mt-10 grid grid-cols-2 gap-x-0">
                {
                    CARDS.map(item => {
                        return (
                            <FrontItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                iconURL={item.icon}
                                sendTo={item.linkTo}
                            />
                        )
                    })
                }
            </div>
            <p className="text-2xl mt-8 align-center font-bold text-black font-serif "><tt><em> My Weblinks </em></tt></p>
            <div className="flex flex-row font font-sans justify-start gap-x-8 text-2xl mt-4 text-gray-600 font-semibold">
            <Link to="https://www.linkedin.com/in/aakash-mishra-823b1a223/" target="__blank"><em>linkedin</em></Link>
            <Link to="https://github.com/Aakash-mishra2" target="__blank"><em>github</em></Link>       
            <Link to="https://medium.com/@aakash281" target="__blank"><em>medium</em></Link></div>
        </div>
    )
}