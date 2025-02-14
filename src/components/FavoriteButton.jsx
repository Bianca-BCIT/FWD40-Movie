import { useContext } from "react";
import "./FavoriteButton.css";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({ movieData }) {
    const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);
    //check if movie already in favorites 
    // console.log(movieData.id);
    // const isFavorite = false;
    const isFavorite = favorites.find((fav) => fav.id === movieData.id);
    // const isFavorite = Array.isArray(favorites) && favorites.find((fav) => fav.id === movieData.id);
    // function to handle the click event on the fav button



    function handleFavorite(event) {
        // will prevent click from bubbling up to the parent and causing link to be blicked and redirecting to movie page 
        event.stopPropagation();
        //like a toggle switch 
        // if it is , clicling the the button should remove it from fav, if not ,should add it. 
        if (isFavorite) {
            removeFavorite(movieData);
        } else {
            addFavorite(movieData);
        }
    }

    // the fav button need to know whether the current movie it is connected to, its already in favorites or not.

    return <button onClick={handleFavorite}>{isFavorite ? "❤️ " : "🤍"}</button>
}


export default FavoriteButton;

