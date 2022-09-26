import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function ResultCart({movie}) {
  const {watchlist,watchedlist,addMovieToWatchlist,addMovieToWatched}=useContext(GlobalContext)

  const storedMovieWatched=watchedlist.find((m)=>m.id===movie.id)
  const storedMovie=watchlist.find((m)=>m.id===movie.id) ? true: storedMovieWatched ?true:false
 
  
  return (

    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
            <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}    />

        ) : (
          <div className='filler-poster'></div>
        )}
    
      
      </div>
      <div className='info'> 
       <div className='header'>
        <h3 className='tirle'>{movie.title}</h3>
        <h4>{movie.release_date ? movie.release_date.substring(0,4): "-"}</h4>
        <h4 className="release-date">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
       </div>
       <div className="controls">
          <button
            className="btn"
             onClick={()=> addMovieToWatchlist(movie)}
             disabled={storedMovie}
            
      
          >
           İzlenecekler Listesine Ekle
          </button>
          <button
            className="btn"
             onClick={()=> addMovieToWatched(movie)}
             disabled={storedMovieWatched}
            
      
          >
           İzlenenler Listesine Ekle
          </button>
       </div>

      </div>
    </div>
  )
}

export default ResultCart