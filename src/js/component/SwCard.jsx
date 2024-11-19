import React from "react";
import "../../styles/swcard.css";

export const SwCard = () => {
    return (
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
                <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="Luke Skywalker" />
            </div>
            <div className="content">
                <div className="details">
                    <h2>Luck SkyWalker <br></br><span>Master Jedi</span></h2>

                </div>
            </div>
        </div>
    );
};