import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/demo.css";
import { Link } from "react-router-dom";


export const CardNave = (props) => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.model}</p>
                <Link to={"/nave/" + props.url}>
                    <button className="btn btn-primary">Learn more{props.url}</button>
                </Link>
            </div>
        </div>
    )
};