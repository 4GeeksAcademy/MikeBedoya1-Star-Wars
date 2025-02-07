import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export const FavoritesButton = (props) => {
    const { store, actions } = useContext(Context);

    const removeFavorite = (fav, event) => {
        event.preventDefault();
        event.stopPropagation();
        actions.removeFavorites(fav);
    };

    return (
        <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
            Favorites <span>{store.favorites.length}</span> 
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {store.favorites.map((fav, index) => (
                    <li key={index} className="d-flex justify-content-between align-items-center">
                        <p className="dropdown-item">{fav}</p>
                        <button
                            className="btn btn-link"
                            onClick={(event) => removeFavorite(fav, event)}
                            title="Remove from Favorites"
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
