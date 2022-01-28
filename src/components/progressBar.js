import React from "react";

export default function Progressbar(props) {
    console.log(props.page, "page no");
    return (
        // <div className="progress">
        //   <ul>
        //     <li>
        //       {/* <img src="/assests/envira-brands2.png" alt="image1" /> */}
        //       <p>1</p>
        //     </li>
        //     <li>
        //       {/* <img src="/assests/envira-brands2.png" alt="image1" /> */}
        //       <p>2</p>
        //     </li>
        //     <li>
        //       {/* <img src="/assests/envira-brands2.png" alt="image1" /> */}
        //       <p>3</p>
        //     </li>
        //     <li>
        //       {/* <img src="/assests/envira-brands2.png" alt="image1" /> */}
        //       <p>4</p>
        //     </li>
        //   </ul>
        // </div>
        <div className="progressbar-container">
            <div className="progressbar">
                <div
                    className="progressbar-color"
                    style={{
                        width:
                            props.formpage === 0
                                ? "25%"
                                : props.formpage === 1
                                    ? "50%"
                                    : props.formpage === 2
                                        ? "75%"
                                        : "100%"
                    }}
                ></div>
                <div className="progressbar-gray"></div>
            </div>
            <ul className="liststyle">
                <li>
                    <p>1</p>
                </li>
                <li>
                    <p>2</p>
                </li>
                <li>
                    <p>3</p>
                </li>
                <li>
                    <p>4</p>
                </li>
            </ul>
        </div>
    );
}
