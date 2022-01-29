import React from "react";
import Input from "./form-controls/Input";

export default function SetupForm(props) {
    const { workspaceName, workspaceUrl, errors } = props.formData;
    const handleChange = (e) => {
        props.handleChange(e);
    };
    return (
        <>
            <Input
                prefix=""
                title="Workspace Name"
                value={workspaceName}
                placeholder="workspacename"
                type="text"
                name="workspaceName"
                onChange={handleChange}
                error={errors.workspaceName}
                disabled={false}
                visibility={true}
            />
            <Input
                prefix="www.eden.com/"
                title="Workspace URL"
                value={workspaceUrl}
                placeholder="workspaceurl"
                type="text"
                name="workspaceUrl"
                onChange={handleChange}
                error={errors.workspaceUrl}
                disabled={false}
                visibility={true}
            />
        </>
    );
}
