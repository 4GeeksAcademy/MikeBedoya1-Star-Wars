import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/demo.css";
import { Link } from "react-router-dom";



export const CardPeople = (props) => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender: {props.gender}</p>
                <p className="card-text">Hair color: {props.hair_color}</p>
                <p className="card-text">eye color: {props.eye_color}</p>
                <Link to={"/character/" + props.url}>
                    <button className="btn btn-primary">Learn more {props.url}</button>
                </Link>
                <button onClick={()=> actions.addFavorites(props.name)}>heart</button>
            </div>
        </div>
    )
};