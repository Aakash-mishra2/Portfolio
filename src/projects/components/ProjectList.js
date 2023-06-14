import React from "react";
import ProjectItem from "./ProjectItem";
import '../styles/ProjectList.css';
import Card from "../../shared/UIElements/Card";

export default function ProjectList(props) {
    if (props.projects.length === 0) {
        return (
            <div className="center" >
                <Card>
                    <p>No projects found ! Maybe create one. </p>
                </Card>
            </div>
        );
    }

    return (
        <ul className="project-list">
            {props.projects.map(items => (
                <ProjectItem
                    key={items.id}
                    id={items.id}
                    title={items.title}
                    description={items.description}
                    deploy={items.projectUrl}
                    github={items.repoLink}
                    readMe={items.READme}
                />
            ))}
        </ul>
    );
}