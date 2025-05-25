import React from 'react';
import '../Styles/Health_Status_Bar.css';

function Health_Status_Bar({ Percentage=100, Fill_Color = "skyblue" }) {
    return (
        <div className="Bar_MainDiv">
            <div className="Line_Box">
                <div className="Line_Bar">
                    <span
                        className="Fill_Line"
                        style={{
                            width: `${Percentage}%`,
                            animationDelay: "0.1s",
                            background: Fill_Color,
                        }}
                    ></span>
                </div>
            </div>
        </div>
    );
}

export default Health_Status_Bar;
