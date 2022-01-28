import React from "react";

export default function PlanCard(props) {
    // const [active, setActive] = React.useState(true);
    return (
        <div className="plan-card">
            <img src={props.icon} alt={props.cardtitle} />
            <h4>{props.cardtitle}</h4>
            <p>{props.cardtext}</p>
        </div>
    );
}
