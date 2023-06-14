import React from "react";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormComponents/Button";
import '../styles/ProjectItem.css';

export default function CaseItem(props) {

    return (
        <div>
            <React.Fragment>
                <ul className="project-item">
                    <Card className="project-item__content">
                        <div className="project-item__image">
                            <img src={props.image} alt={props.court} />
                        </div>
                        <div className="project-item__info">
                            <h2>{props.title}</h2>
                        </div>
                        <div className="project-item__actions">

                            <Button to={props.readMe}>DESCRIPTION</Button>
                            <Button to={props.deploy}>VIEW</Button>
                            <Button to={props.github}>Github Repository </Button>
                        </div>
                    </Card>
                </ul>
            </React.Fragment>
        </div>
    );
}