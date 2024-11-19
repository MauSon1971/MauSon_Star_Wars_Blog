import React from "react";
import "../../styles/home.css";
import { Card } from "../component/Card.jsx";
import { SwCard } from "../component/SwCard.jsx";


export const Home = () => (
	<div className="text-center mt-5">
		<h1>MauSon StarWars Blog</h1>
		{/* <Card /> */}
		<SwCard />


	</div>
);
