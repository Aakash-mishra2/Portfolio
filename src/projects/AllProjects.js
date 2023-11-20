import React from "react";
import ProjectList from "./components/ProjectList";
//import jvc from "../icons/java_calculator.png";
import ccms from "../icons/ccms.jpg"
import metup from "../icons/meetup.JPG"
import todo from "../icons/todo-app.JPG"
import shop from "../icons/shopmate.jpg"
export default function AllProjects() {
    const ALL_PROJECTS = [
        {
            id:'shl234',
            title: 'Shopping List: Node Backend',
            description: 'Node Backend for handling REST-API requests using Graphql and Express with exhaustive error handling and input validation.',
            projectUrl: 'https://github.com/Aakash-mishra2/rest-api-using-node-mongodb-graphql-mongoose-express',
            image: shop,
            gitURL: 'https://github.com/Aakash-mishra2/rest-api-using-node-mongodb-graphql-mongoose-express',
            techStack: 'Node, Express, MongoDB, GraphQL, Router, express-validator'
        },
        {
            id: 'thl234',
            title: 'Court Case Management System : MERN',
            description: "Full MERN Stack web application to manage pending court cases for citizens and register new case applications online. BACKEND: https://github.com/Aakash-mishra2/CCMS-backEnd",
            image: ccms,
            projectUrl: 'https://yourccms.netlify.app/',
            gitURL: 'https://github.com/Aakash-mishra2/CCMS-reactjs-front-end',
            techStack: "Frontend: ReactJS, Hooks, TailwindCSS, Axios, Redux, HTML-CSS  Backend: RestAPI, NodeJS, ExpressJS, Javascript, MongoDB ",
        },
        {
            id: 'tda234',
            title: 'ToDo-list App: React-Redux',
            description: "On the go Todo-list management application. CRUD your tasks and boards( task-lists) on the go.",
            projectUrl: 'https://my-todo-webapp.netlify.app/',
            image: todo,
            gitURL: 'https://github.com/Aakash-mishra2/todo-app-assignment',
            techStack: 'React, Redux, TailwindCSS, Styled-components, MaterialUI, HTML-CSS',

        },
        {
            id: 'mu322',
            title: 'Your Meetups: NEXT',
            description: " A full stack meetup storing album. Create meetup memories and share to your new network.",
            projectUrl: 'https://nextjs-typescript-project-three.vercel.app/',
            image: metup,
            gitURL: 'https://github.com/Aakash-mishra2/nextjs-typescript-project',
            techStack: 'Full Stack : NextJS, MongoDB, FetchAPI, Javascript, HTML-CSS '
        },
        // {
        //     id: 'jsc234',
        //     title: 'Co-curricular: Java swing calculator',
        //     image: jvc,
        //     description: " A calculator using java swing package built in Java programming lab, 5th semester. ",
        //     gitURL: 'https://github.com/Aakash-mishra2/Java_swing_Calculator',
        //     techStack: ' Java programming with Swing and Applet'
        // }
    ]

    return <ProjectList projects={ALL_PROJECTS} />;

}