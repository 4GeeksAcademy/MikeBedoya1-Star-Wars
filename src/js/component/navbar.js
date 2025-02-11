import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { FavoritesButton } from "./favorites";
import PropTypes from "prop-types";

export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mx-3 mb-0 h1">
					<img id="star-icon" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/star-wars-3200442-2662302.png" alt="Star Wars Logo" style={{ width: "60px" }}/>
				</span>
			</Link>			
			<div className="row mx-5 ml-auto">
				<FavoritesButton name={store.favorites.name}/>	
			</div>
		</nav>
	);
};
