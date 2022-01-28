export const nameValidator = (value) => {
    let error = "";
    const regex = /^[a-zA-Z ]{2,30}$/;
    if (value === "") {
        error = "This field is required.";
    }
    else if (value.length < 2) {
        error = "Min length is 2.";
    }
    else if (value.length >= 30) {
        error = "Max length is 30.";
    }
    else if (!regex.test(value)) {
        error = "Full name is not valid. (Min length 1 ,Max length 30)";
    } else {
        error = "";
    }
    return error;
};

export const displayNameValidator = (value) => {
    let error = "";
    const regex = /^[a-zA-Z0-9+-@!#%^&*() ]{2,30}$/;
    if (value === "") {
        error = "This field is required.";
    }
    else if (value.length < 2) {
        error = "Min length is 2.";
    }
    else if (value.length >= 30) {
        error = "Max length is 30.";
    }
    else if (!regex.test(value)) {
        error = "Display name is not valid.";
    } else {
        error = "";
    }
    return error;
};

export const workspaceNameValidator = (value) => {
    let error = "";
    const regex = /^[a-zA-Z0-9+-@!#%^&*() ]{2,50}$/;
    if (value === "") {
        error = "This field is required.";
    }
    else if (value.length < 2) {
        error = "Min length is 2.";
    }
    else if (value.length >= 30) {
        error = "Max length is 30.";
    }

    else if (!regex.test(value)) {
        error = "Workspace name is not valid.";
    } else {
        error = "";
    }
    return error;
};

export const workspaceUrlValidator = (value) => {
    let error = "";
    const regex = /^[a-zA-Z0-9+-@!#%^&*() ]{2,50}$/;
    if (value === "") {
        error = "This field is required.";
    }
    else if (value.length < 2) {
        error = "Min length is 2.";
    }
    else if (value.length >= 30) {
        error = "Max length is 30.";
    }
    else if (!regex.test(value)) {
        error = "Workspace url is not valid.";
    } else {
        error = "";
    }
    return error;
};
