import React from "react";

export default function Input(props) {
    return (
        <div className="input-div">
            <h5>{props.title}</h5>
            <div className="inputbox">
                {props.prefix.length !== 0 ? (
                    <span className="prefixInput">{props.prefix}</span>
                ) : null}
                <input style={{ display: props.visibility ? 'block' : 'none' }}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}
                    disabled={props.disabled}
                />
            </div>
            {props.error !== "" ? (
                <span className="error-span">{props.error}</span>
            ) : null}
        </div>
    );
}
