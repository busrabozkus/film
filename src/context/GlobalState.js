import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";


export const GlobalContext = createContext()

const initialState={
    watchlist:localStorage.getItem("watchlist") ? 
    JSON.parse(localStorage.getItem("watchlist")) : [],
    watchedlist:localStorage.getItem("watchedlist") ? 
    JSON.parse(localStorage.getItem("watchedlist")) : [],

}
export const GlobalProvider= (props)=>{
    const[state,dispatch]=useReducer(AppReducer,initialState)
    useEffect(()=>{
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watchedlist", JSON.stringify(state.watchedlist))
},[state]);

    const addMovieToWatchlist=(movie)=>{
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST",payload:movie})
    }
    const removeMovieFromWatchlist = (id) =>{
        dispatch({type:"REMOVE_MOVIE_TO_WATCHLIST" , payload:id})

    }
    const addMovieToWatched=(movie)=>{
        dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie})

    }
    const moveToWatchlist=(movie)=>{
        dispatch({type:"MOVE_TO_WATCHED",payload:movie})
    }
    const removeMovieFromWatchedlist = (id) =>{
        dispatch({type:"REMOVE_MOVIE_TO_WATCHEDLIST" , payload:id})

    }
    return (
    <GlobalContext.Provider 
    value={{
        watchlist: state.watchlist,
        watchedlist:state.watchedlist,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeMovieFromWatchedlist
    }}
        >
            {props.children}
            </GlobalContext.Provider>)
}
