import FrontList from "./components/FrontList";

export default function FrontPage() {
    const CARDS = [
        {
            id: 'projects',
            name: "My Projects",
            icon: ''
        },
        {
            id: 'trainings',
            name: "My trainings and Certifications",
            icon: ''
        },
        {
            id: 'articles',
            name: "Articles and More..",
            icon: ''
        },
        {
            id: 'extras',
            name: "Extra-Curriculars",
            icon: ''

        }
    ]

    return (<FrontList cards={CARDS} />)
}