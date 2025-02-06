import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [planetdetail, setPlanetdetail] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/" + params.planet_url)
      .then((response) => response.json())
      .then((data) => setPlanetdetail(data));
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Info Planet {params.planet_url}</h1>

      <ul className="detail-list">
        <li><strong>Name:</strong> {planetdetail.name}</li>
        <li><strong>Rotation period:</strong> {planetdetail.rotation_period}</li>
        <li><strong>climate:</strong> {planetdetail.climate}</li>
        <li><strong>gravity:</strong> {planetdetail.gravity}</li>
        <li><strong>surface_water:</strong> {planetdetail.surface_water}</li>
        
      </ul>

      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Planet.propTypes = {
  match: PropTypes.object,
};
