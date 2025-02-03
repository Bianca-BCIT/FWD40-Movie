import { Children, createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

//local storage

function getInitialStateFromLocalStorage() {
    // use local storage to see if item favorites exist 
    const favorites = localStorage.getItem("favorites");
    // if it does..
    return favorites ? JSON.parse(favorites) : [];

}

function GlobalProvider(Children) {

    const [favorites, setfavorites] = useState([]);

    useEffect(() => {

        //evertime local storage changes we update favortes with stringify version of lates copy of favorites. 

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);



    //remove fav function
    function removeFavorite(movie) {

        const newFavorites = favorites.filter((fav) => fav.id !== movie.id);
        // pulling the movie with uneual id and store it in a variable, then update the state 
        setfavorites(newFavorites);

    }

    //add fav 
    function addFavorite(movie) {
        setfavorites([...favorites, movie]);
    }

    // add local storage functionality

    return (

        <GlobalContext.Provider value={{ favorites, removeFavorite, addFavorite }}>
            {Children}
        </GlobalContext.Provider>


    )
}

export { GlobalProvider, GlobalContext };