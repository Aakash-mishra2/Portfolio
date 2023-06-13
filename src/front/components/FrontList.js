import React from "react";
import FrontItem from "./FrontItem";
import Card from "../../shared/UIElements/Card";
import '../styles/FrontList.css';


export default function FrontList(props) {
    if (props.cards.length === 0) {
        return (
            <div className="center">
                <Card>
                    <p>No cards found. Add some!</p>
                </Card>
            </div>

        );
    }

    return (
        <ul className="front-list">
            {
                props.cards.map(blocks => {
                    return (
                        <FrontItem
                            key={blocks.id}
                            id={blocks.id}
                            name={blocks.name}
                            iconURL={blocks.icon}
                            sendTo={blocks.linkTo}
                        />
                    )
                })
            }
        </ul>
    );
}