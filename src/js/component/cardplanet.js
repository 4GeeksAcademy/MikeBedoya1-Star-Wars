import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/demo.css";
import { Link } from "react-router-dom";


export const CardPlanet = (props) => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name:{props.name}</h5>
                <p className="card-text">Population:{props.population}</p>
                <p className="card-text">Terrain:{props.terrain}</p>
                <Link to={"/planet/" + props.url}>
                    <button className="btn btn-primary">Learn more {props.url}</button>
                </Link>
            </div>
        </div>
    )
};