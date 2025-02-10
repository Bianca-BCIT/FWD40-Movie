import { Children, createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

//local storage

function getInitialStateFromLocalStorage() {
    // use local storage to see if item favorites exist 
    const favorites = localStorage.getItem("favorites");
    // if it does..
    return favorites ? JSON.parse(favorites) : [];

}

function GlobalProvider({ Children }) {

    const [favorites, setfavorites] = useState(getInitialStateFromLocalStorage());

    useEffect(() => {

        //evertime local storage changes we update favortes with stringify version of latest copy of favorites. 

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);



    //remove fav function
    function removeFavorite(movie) {

        const newFavorites = favorites.filter((fav) => {

            return fav.id !== movie.id;
        });
        // pulling the movie with uneual id and store it in a variable, then update the state 
        setfavorites(newFavorites);

    }

    //add fav 
    function addFavorite(movie) {
        // get copy of old array, and add movie to it 
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