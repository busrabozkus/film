export default (state,action) =>{
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return{
                ...state,
                watchlist: [...state.watchlist,action.payload]

            }
            case "REMOVE_MOVIE_TO_WATCHLIST" :
                return{
                    ...state,
                    watchlist: state.watchlist.filter(
                        (movie)=> movie.id !== action.payload
                    ),


                }
            case "ADD_MOVIE_TO_WATCHED" :
                return{
                    ...state,
                    watchlist:state.watchlist.filter( (movie)=> movie.id !== action.payload.id),
                    watchedlist:[...state.watchedlist,action.payload]

                }
                case "MOVE_TO_WATCHED" :
                    return{
                    ...state,
                    watchedlist:state.watchedlist.filter( (movie)=> movie.id !== action.payload.id),
                    watchlist:[...state.watchlist,action.payload]
                    }
                    case "REMOVE_MOVIE_TO_WATCHEDLIST" :
                        return{
                            ...state,
                            watchedlist: state.watchedlist.filter(
                                (movie)=> movie.id !== action.payload
                            ),
        
        
                        }

            default:
                return state
        
        
        
        
        
        
   
    }
}