import React from "react";
import "../../styles/card.css";

export const Card = () => {


    return (
        <>

            <div className="card-container">
                <div className="card">
                    <img
                        src="https://swtcg.com/Content/Images/Cards/JEDI/JEDI018_Luke_Skywalker_U.webp?v=2"
                        alt="Luke Skywalker"
                        className="card-image"
                    />
                        <div className="card-content">
                            <h3 className="card-title">Luke Skywalker</h3>
                            <p className="card-description">
                                "A legendary Jedi Knight who fought to bring balance to the Force."
                            </p>
                        </div>
                </div>
            </div>

        </>
    )
};
