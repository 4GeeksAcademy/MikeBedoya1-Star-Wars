import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/" + params.nave_url)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Info nave {params.nave_url}</h1>

      <ul className="detail-list">
        <li><strong>Name:</strong> {detail.name}</li>
        <li><strong>Model:</strong> {detail.model}</li>
        <li><strong>Manufacturer:</strong> {detail.manufacturer}</li>
        <li><strong>Passengers:</strong> {detail.passengers}</li>
        <li><strong>Cargo Capacity:</strong> {detail.cargo_capacity}</li>
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

Nave.propTypes = {
  match: PropTypes.object,
};
