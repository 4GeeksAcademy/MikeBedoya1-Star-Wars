import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardNave } from "../component/cardnave";


export const Home = () => {
	
	return (
		<div className="text-center mt-5">
			<h1>naves</h1>
			<CardNave />

		</div>
	)
};
