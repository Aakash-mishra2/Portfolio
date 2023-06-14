import React from "react";
import ProjectList from "./components/ProjectList";

export default function AllProjects() {
    const ALL_PROJECTS = [
        {
            id: 'thl234',
            title: 'Court Case Management System',
            description: " No desc. ",
            projectUrl: 'https://superb-marigold-f77750.netlify.app/',
            repoLink: 'https://github.com/Aakash-mishra2/CCMS-frontEnd',
            READme: ''
        },
        {
            id: 'thl234',
            title: 'Shopmate',
            description: " No desc. ",
            projectUrl: 'https://grand-nougat-b73bde.netlify.app/',
            repoLink: 'https://github.com/Aakash-mishra2/ShopMate-FrontEnd',
            READme: 'https://github.com/Aakash-mishra2/ShopMate-FrontEnd#readme'
        }
    ]

    return <ProjectList projects={ALL_PROJECTS} />;

}