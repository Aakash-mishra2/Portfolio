import React from "react";
import ProjectList from "./components/ProjectList";
import jvc from "../icons/java_calculator.png";
import ccms from "../icons/ccms.jpg"
import shopm from "../icons/shopmate.jpg"
export default function AllProjects() {
    const ALL_PROJECTS = [
        {
            id: 'thl234',
            title: 'Court Case Management System',
            description: "Full MERN Stack web application to manage pending court cases for citizens and register new case applications online. ",
            image: ccms,
            projectUrl: 'https://yourccms.netlify.app/',
            gitURL: 'https://github.com/Aakash-mishra2/CCMS-frontEnd',
            techStack: "Frontend: ReactJS, Hooks , Axios, Redux, HTML-CSS  Backend: RestAPI, NodeJS, ExpressJS, Javascript, MongoDB ",
        },
        {
            id: 'thl234',
            title: 'Shopmate',
            description: "Dynamic Shopping list web app to add and remove items. Save your shopping lists for future.",
            projectUrl: 'https://shopmate-sky.netlify.app/',
            image: shopm,
            gitURL: 'https://github.com/Aakash-mishra2/ShopMate-FrontEnd',
            techStack: 'FrontEnd: ReactJS, ContextAPI, Javascript, HTML-CSS '
        },
        {
            id: 'jsc234',
            title: 'Co-curricular: Java swing calculator',
            image: jvc,
            description: " No desc. ",
            gitURL: 'https://github.com/Aakash-mishra2/Java_swing_Calculator',
            techStack: ''
        }
    ]

    return <ProjectList projects={ALL_PROJECTS} />;

}