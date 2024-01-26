import FrontItem from "./components/FrontItem";
import { Link } from "react-router-dom";
import prj from '../icons/project-management.png';
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
        }
    ]

    return (
        <div className="max-w-5xl mx-auto md:ml-24 mb-4 md:mr-8 ml-8 mr-4">
            <h1 className="text-3xl font-bold text-black font-serif mt-10 ml-30 mb-4">
                <tt>Hey 👋, I'm Aakash Mishra</tt>
            </h1>
            <p className="text-xl font-bold  text-gray-600 font-serif mb-4"><tt>
                I am a CSE undergraduate and I do Full Stack Web development using
                Javascript, React, Next, Redux, tailwindcss, HTML, Node.js and More.
                I love core programming by Object Oriented Design using C++ STL, Data structures and Algorithms.
            </tt></p>
            <div className=" flex flex-col md:ml-4 m-0 p-0 md:grid md:grid-cols-2 gap-x-0 gap-y-0 h-4/5">
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
            <p className="text-xl mt-8 align-center font-bold text-black font-serif "><tt><em> My Weblinks </em></tt></p>
            <div className="flex flex-row font font-sans justify-start gap-x-8 text-xl mt-4 text-gray-600 font-semibold">
                <Link to="https://www.linkedin.com/in/aakash-mishra-823b1a223/" target="__blank"><em>linkedin</em></Link>
                <Link to="https://github.com/Aakash-mishra2" target="__blank"><em>github</em></Link>
                <Link to="https://medium.com/@aakash281" target="__blank"><em>medium</em></Link>
                <Link to="https://replit.com/@Aakash-mishra2" target="__blank"><em>replit</em></Link>
            </div>
        </div>
    )
}