import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardNave } from "../component/cardnave";


export const Home = () => {

	const { store } = useContext(Context);
	
	return (
		<div className="row text-center mt-5">
			<h1>naves</h1>
			
			{store.naves.map((nave) => <CardNave key={nave.url} url={nave.url} name={nave.name} model={nave.model}/>)}
		</div>
	)
};
