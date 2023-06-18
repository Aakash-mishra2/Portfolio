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
            description: " No desc. ",
            image: ccms,
            projectUrl: 'https://courtcase-manager.netlify.app/',
            repoLink: 'https://github.com/Aakash-mishra2/CCMS-frontEnd',
            READme: 'https://github.com/Aakash-mishra2/CCMS-frontEnd#readme'
        },
        {
            id: 'thl234',
            title: 'Shopmate',
            description: " No desc. ",
            projectUrl: 'https://shopmate-sky.netlify.app/',
            image: shopm,
            repoLink: 'https://github.com/Aakash-mishra2/ShopMate-FrontEnd',
            READme: 'https://github.com/Aakash-mishra2/ShopMate-FrontEnd#readme'
        },
        {
            id: 'jsc234',
            title: 'Co-curricular: Java swing calculator',
            image: jvc,
            description: " No desc. ",
            repoLink: 'https://github.com/Aakash-mishra2/Java_swing_Calculator',
        }
    ]

    return <ProjectList projects={ALL_PROJECTS} />;

}