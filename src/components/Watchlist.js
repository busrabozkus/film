import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'
 

function Watchlist() {
  const {watchlist}=useContext(GlobalContext)
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          
        </div>
        {watchlist.length >0  ?  (
          <div className='movie-grid'>
            {watchlist.map((movie)=> (
              <MovieCard movie={movie} key={movie.id} type="watchlist"/>
            ))}
            </div>
            ) :(
              <h2 className='no-movies'>Listenizde Film Bulunmamaktadır..</h2>
            
      
           
            )}
          </div>
       

      </div>
   
  
  )
}

export default Watchlist