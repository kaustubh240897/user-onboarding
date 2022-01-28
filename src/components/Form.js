import React from "react";
//import CongratsForm from "./congratsForm";
import SetupForm from "./setupForm";
import PlanningForm from "./planningForm";
import WelcomeForm from "./welcomeForm";
import Progressbar from "./progressBar";

// Form Controls
import Button from "./form-controls/Button";
import { displayNameValidator, nameValidator, workspaceNameValidator, workspaceUrlValidator } from "../utils/validators";

export default function Form({ text, pageNext }) {
    const [page, setPage] = React.useState(0);
    const [formData, setFormData] = React.useState({
        fullName: "",
        displayName: "",
        workspaceName: "",
        workspaceUrl: "",
        teamType: "",
        errors: {}
    });
    const [isSubmit, setIsSubmit] = React.useState(false);

    const handleOnClick = () => {

        if (page === formHeadings.length - 1) {
            alert("FORM SUBMITTED");
            console.log("REACHED END POINT");
            console.log(formData);
        }
        else if (page === 3) {
            setIsSubmit(true);
        }

        else {
            setPage((currPage) => currPage + 1);
            setIsSubmit(false);
        }
    };

    const formHeadings = [
        "Welcome! First Things first...",
        "Let's set up a home for all your work",
        "How are you planning to use Eden?",
        "Congratulations, Eren!"
    ];

    const formsubHeadings = [
        "You can always change them later.",
        "you can create another workspace later.",
        "we'll streaming your setup experience accordingly",
        "You have completed onboarding, you can start using Eden"
    ];

    const buttonText = [
        "Create Workspace",
        "Create Workspace",
        "Create Workspace",
        "Launch Eden"
    ];

    const PageDisplay = () => {
        if (page === 0) {
            return <WelcomeForm formData={formData} handleChange={handleChange} />;
        } else if (page === 1) {
            return <SetupForm formData={formData} handleChange={handleChange} />;
        } else if (page === 2) {
            return <PlanningForm formData={formData} handlePlanCardChange={handlePlanCardChange} />;
        }
    };

    const handlePlanCardChange = (name, value) => {

        if (name === "teamType") {
            setFormData({
                ...formData,
                teamType: value
            });
        }

        if (name === "teamType" && value !== "") {
            setIsSubmit(true);
        } else {
            setIsSubmit(false);
        }
    };

    const handleChange = (event) => {
        let { name, value } = event.target;

        let error = "";
        if (name === "fullName") {
            error = nameValidator(value);
            setFormData({
                ...formData,
                fullName: value,
                errors: { ...formData.errors, fullName: error }
            });
        } else if (name === "displayName") {
            error = displayNameValidator(value);
            setFormData({
                ...formData,
                displayName: value,
                errors: { ...formData.errors, displayName: error }
            });

        }
        else if (name === "workspaceName") {
            error = workspaceNameValidator(value);
            setFormData({
                ...formData,
                workspaceName: value,
                errors: { ...formData.errors, workspaceName: error }
            });

        }
        else if (name === "workspaceUrl") {
            error = workspaceUrlValidator(value);
            setFormData({
                ...formData,
                workspaceUrl: value,
                errors: { ...formData.errors, workspaceUrl: error }
            });
        }
        else if (name === "teamType") {
            error = workspaceUrlValidator(value);
            setFormData({
                ...formData,
                teamType: value,
                // errors: { ...formData.errors, workspaceUrl: error }
            });
        }


        if (
            page === 0 &&
            error === "" &&
            formData.fullName !== "" &&
            formData.displayName !== ""
        ) {
            setIsSubmit(true);
        }
        else if (page === 1 &&
            error === "" &&
            formData.workspaceName !== "" &&
            formData.workspaceUrl !== "") {
            setIsSubmit(true);

        }
        else if (page === 2 &&
            error === "" &&
            formData.workspaceName !== ""
        ) {
            setIsSubmit(true);

        }
        else if (page === 3 &&
            name === 'teamType' && value !== ""
        ) {
            setIsSubmit(true);

        }
        if (error !== "") {
            setIsSubmit(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-logo">
                <img src="/assets/logo.png" alt="brand-logo" />
                <h2>Eden</h2>
            </div>
            <div>
                <Progressbar formpage={page} />
            </div>
            {page === 3 ? (
                <div className="congrats-tick">
                    <img src="/assets/check.png" alt="congratsCheck" />
                </div>
            ) : null}
            <div className="form-heading">
                <h1>{formHeadings[page]}</h1>
                <p>{formsubHeadings[page]}</p>
            </div>
            <div className="form-body">{PageDisplay()}</div>
            <div className="form-footer">
                <Button
                    pageNext={handleOnClick}
                    text={buttonText[page]}
                    disabled={page === 3 ? false : !isSubmit}
                />
            </div>
        </div>
    );
}
