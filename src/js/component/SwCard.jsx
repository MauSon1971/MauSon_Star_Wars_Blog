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
                    <h2> Luck SkyWalker <br></br><span> Master Jedi </span></h2>
                    <div className="data">
                        <h3>342<br/><span> Post </span></h3>
                        <h3>150k<br/><span> Followers </span></h3>
                        <h3>333<br/><span> Following </span></h3>
                    </div>
                    <div className="actionBtn">
                        <button> More... </button>
                        <button> Favorites </button>
                    </div>

                </div>
            </div>
        </div>
    );
};