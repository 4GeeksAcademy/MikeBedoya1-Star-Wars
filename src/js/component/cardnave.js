import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "../../styles/cardnave.css";

export const CardNave = (props) => {
    const { store, actions } = useContext(Context);
    const isFavorite = store.favorites.includes(props.name);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            actions.removeFavorites(props.name);
        } else {
            actions.addFavorites(props.name);
        }
    };

    return (
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Model: {props.model}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <Link to={"/nave/" + props.url}>
                        <button className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                    <label className="heart-label">
                        <button
                            onClick={handleFavoriteClick}
                            className={`btn btn-outline-secondary heart-button ${isFavorite ? "filled" : ""}`}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
};
