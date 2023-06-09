import Card from "../../shared/UIElements/Card";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/UIElements/Avatar";
import '../styles/FrontItem.css';


export default function FrontItem(props) {
    return (
        <li className="front-item">
            <Card className="front-item__content">
                <Link to={`/${props.id}`} >
                    <div className="front-item__image">
                        <Avatar image={props.iconURL} alt={`${props.name}`} />
                    </div>

                    <div className="front-item__info">
                        <h2>{props.name}</h2>
                    </div>
                </Link>
            </Card>
        </li>
    )
}