import React from "react";
import ProjectList from "./components/ProjectList";

export default function AllProjects() {
    const ALL_PROJECTS = [
        {
            id: 'thl234',
            title: 'Court Case Management System',
            description: " No desc. ",
            projectUrl: 'https://lustrous-chimera-92ec15.netlify.app/',
            repoLink: 'https://github.com/Aakash-mishra2/CCMS-frontEnd',
            READme: ''
        },
        {
            id: 'thl234',
            title: 'Shopmate',
            description: " No desc. ",
            projectUrl: 'https://clever-paletas-35e720.netlify.app/',
            repoLink: 'https://github.com/Aakash-mishra2/Shopmate',
            READme: 'https://github.com/Aakash-mishra2/Shopmate#readme'
        },
        {
            id: 'thl234',
            title: 'Dynamic Login',
            description: " No desc. ",
            projectUrl: 'https://lively-axolotl-2bb941.netlify.app/',
            repoLink: 'https://github.com/Aakash-mishra2/Dynamic-Login',
            READme: ' '
        }
    ]

    return <ProjectList projects={ALL_PROJECTS} />;

}