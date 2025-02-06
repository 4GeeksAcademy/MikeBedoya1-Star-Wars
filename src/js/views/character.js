import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [peopledetail, setPeopleDetail] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + params.character_url)
      .then((response) => response.json())
      .then((data) => setPeopleDetail(data));
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Info Character {params.character_url}</h1>

      <ul className="detail-list">
        <li><strong>Name:</strong> {peopledetail.name}</li>
        <li><strong>birth_year:</strong> {peopledetail.birth_year}</li>
        <li><strong>gender:</strong> {peopledetail.gender}</li>
        <li><strong>height:</strong> {peopledetail.height}</li>
        <li><strong>skin color:</strong> {peopledetail.skin_color}</li>
        <li><strong>eye color:</strong> {peopledetail.eye_color}</li>
        
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

Character.propTypes = {
  match: PropTypes.object,
};
