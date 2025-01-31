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
                <h5 className="card-title">nave 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/demo">
                    <button className="btn btn-primary">Go somewhere</button>
                </Link>
            </div>
        </div>
    )
};