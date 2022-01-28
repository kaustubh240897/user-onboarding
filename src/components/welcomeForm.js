import React from "react";
import Input from "./form-controls/Input";

export default function WelcomeForm(props) {
    const { fullName, displayName, errors } = props.formData;
    const handleChange = (e) => {
        props.handleChange(e);
    };
    return (
        <>
            <Input
                prefix=""
                placeholder="Full Name"
                value={fullName}
                type="text"
                title="Full Name"
                name="fullName"
                onChange={handleChange}
                error={errors.fullName}
                disabled={false}
                visibility={true}
            />
            <Input
                prefix=""
                placeholder="Display Name"
                value={displayName}
                type="text"
                name="displayName"
                title="Display Name"
                onChange={handleChange}
                error={errors.displayName}
                disabled={false}
                visibility={true}

            />
        </>
    );
}
