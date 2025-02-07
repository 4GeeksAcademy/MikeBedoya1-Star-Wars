import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardNave } from "../component/cardnave";
import { CardPlanet } from "../component/cardplanet";
import { CardPeople } from "../component/cardpeople";



export const Home = () => {

	const { store } = useContext(Context);

	return (
		<>
		<div className="row text-center mt-5">
			<h1 className="text-danger">People</h1>
			<div className="row flex-row flex-nowrap" style={{overflowX: 'auto'}}> 
			{store.people.map((person) => <CardPeople key={person.url}
				url={person.url.replace('https://swapi.dev/api/people/', '').replace('/', '')}
				name={person.name} gender={person.gender} hair_color={person.hair_color} eye_color={person.eye_color} />)}
			</div>
			
		</div>

		<div className="row text-center mt-5">
			<h1 className="text-danger">Planets</h1>
			<div className="row flex-row flex-nowrap" style={{overflowX: 'auto'}}> 
			{store.planets.map((planet) => <CardPlanet key={planet.url}
				url={planet.url.replace('https://swapi.dev/api/planets/', '').replace('/', '')}
				name={planet.name} population={planet.population} terrain={planet.terrain} />)}
			</div>
			
		</div>
		<div className="row text-center mt-5">
			<h1 className="text-danger">Starships</h1>
			<div className="row flex-row flex-nowrap" style={{overflowX: 'auto'}}> 
			{store.naves.map((nave) => <CardNave key={nave.url}
				url={nave.url.replace('https://swapi.dev/api/starships/', '').replace('/', '')}
				name={nave.name} model={nave.model} />)}
			</div>
			
		</div>
		
		</>
	)
};
