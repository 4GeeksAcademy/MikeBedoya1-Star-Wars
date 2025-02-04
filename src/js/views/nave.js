import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [detail, setDetail] = useState([])

    useEffect(()=>{
        fetch('https://swapi.dev/api/starships/' + params.nave_id)
        .then((response) => response.json())
        .then((data) => setDetail(data.results))
        
    },
    [params.nave_id]);
    return (
        <div className="jumbotron">
            <h1 className="display-4">Info nave{params.nave_id}</h1>
            <h2>Model {detail.name}</h2>
            <h2>Model {detail.model}</h2>
            <h2>Model {detail.manufacturer}</h2>
            <h2>Model {detail.max_atmosphering_speed}</h2>
            <h2>Model {detail.passengers}</h2>
            <h2>Model {detail.cargo_capacity}</h2>
            <h2>Model {detail.starship_class}</h2>
            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

Nave.propTypes = {
    match: PropTypes.object
};
