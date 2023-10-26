import React from "react";
import FrontItem from "./FrontItem";
import Card from "../../shared/UIElements/Card";


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
        <div className="flex flex-col ml-24 mt-16 space-y-4 justify-start">
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
        </div>
    );
}