import React from "react";
import Input from "./form-controls/Input";
export default function PlanningForm(props) {
    // const { teamType } = props.formData;
    const handlePlanCardChange = (name, value) => {
        props.handlePlanCardChange(name, value);
    };
    const cardTitle = ["For Myself", "For my Team"];
    const cardText = [
        "write better, Think more Clearly, stay organized",
        "Wikis, Docs, Tasks & Projects, all in one place"
    ];
    const [leftSelectedCard, setLeftSelectedCard] = React.useState(false);
    const [rightSelectedCard, setRightSelectedCard] = React.useState(false);

    const handleLeftPlanCardChange = () => {

        setLeftSelectedCard(true);
        setRightSelectedCard(false);
        handlePlanCardChange("teamType", "self");


    };

    const handleRightPlanCardChange = () => {
        setLeftSelectedCard(false);
        setRightSelectedCard(true);
        handlePlanCardChange("teamType", "team")

    };

    return (
        <div className="plan-card-container">
            <div
                className={leftSelectedCard ? "plan-card purple-border" : "plan-card gray-border"}
                onClick={() => handleLeftPlanCardChange()}
            >
                <img src="/assets/user-solid.svg" alt={cardTitle[0]} />
                <h4>{cardTitle[0]}</h4>
                <p>{cardText[0]}</p>
                <Input
                    prefix=""
                    value="formyself"
                    type="text"
                    name="teamType"
                    // onChange={handleChange}
                    disabled={true}
                    visibility={false}

                />
            </div>

            <div
                className={rightSelectedCard ? "plan-card purple-border" : "plan-card gray-border"}
                onClick={() => handleRightPlanCardChange()}
            >
                <img src="/assets/users-solid.svg" alt={cardTitle[1]} />
                <h4>{cardTitle[1]}</h4>
                <p>{cardText[1]}</p>
                <Input
                    prefix=""
                    value="forteam"
                    type="text"
                    name="teamType"
                    // onChange={handleChange}
                    disabled={true}
                    visibility={false}

                />
            </div>
        </div>
    );
}
