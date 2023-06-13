import FrontList from "./components/FrontList";
import prj from '../icons/project-management.png';
import rsl from '../icons/results.png';
import mlt from '../icons/multitasking.png';
import trg from '../icons/online-learning.png';

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

    return (<FrontList cards={CARDS} />)
}