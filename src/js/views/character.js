import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

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
<>
      <div className="container">
        <div className="row d-flex align-items-center mt-5">
          <div className="col-md-6">
            <img src={rigoImage} className="img-fluid" alt="..." />
          </div>

          <div className="col-md-6">
            <div className="jumbotron">
              <h4 className="display-2 fs-4"><strong>{peopledetail.name}</strong></h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin nibh lacus, at aliquam ligula lacinia non. Mauris eu maximus metus, vitae molestie nibh. Nullam consequat aliquet nulla, vel dictum dolor sollicitudin mollis. Nam vehicula vel leo et interdum. Cras dignissim vulputate ante, in aliquet nulla rhoncus id. Suspendisse potenti. Vestibulum nisi lectus, luctus vitae ligula a, pulvinar varius quam. Ut non dictum eros. Ut sit amet convallis enim. Fusce in ex mollis elit iaculis auctor. Maecenas tempus at turpis.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr className="text-danger"/>
            <div className="row">
              <div className="col-12">
                <ul className="list-unstyled d-flex flex-row text-danger">
                  <li className="me-4"><strong>Name:</strong> {peopledetail.name}</li>
                  <li className="me-4"><strong>Birth year:</strong> {peopledetail.birth_year}</li>
                  <li className="me-4"><strong>Gender:</strong> {peopledetail.gender}</li>
                  <li className="me-4"><strong>Height:</strong> {peopledetail.height}</li>
                  <li className="me-4"><strong>skin color:</strong> {peopledetail.skin_color}</li>
                  <li className="me-4"><strong>eye color:</strong> {peopledetail.eye_color}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Character.propTypes = {
  match: PropTypes.object,
};
