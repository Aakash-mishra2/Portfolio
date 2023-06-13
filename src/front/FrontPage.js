import FrontList from "./components/FrontList";

export default function FrontPage() {
    const CARDS = [
        {
            id: 'projects',
            name: "My Projects",
            linkTo: '/projects',
            icon: ''
        },
        {
            id: 'trainings',
            name: "My trainings and Certifications",
            linkTo: "/trainings",
            icon: ''
        },
        {
            id: 'articles',
            name: "Articles and More..",
            linkTo: "/articles",
            icon: ''
        },
        {
            id: 'extras',
            name: "Marksheets",
            linkTo: "/marksheets",
            icon: ''

        }
    ]

    return (<FrontList cards={CARDS} />)
}