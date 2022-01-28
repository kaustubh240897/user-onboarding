import React from "react";

export default function Button(props) {
    return (
        <div className={props.disabled ? "btn disabled" : "btn"}>
            <button onClick={props.pageNext} disabled={props.disabled}>
                {props.text}
            </button>
        </div>
    );
}
