import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'
 

function Watched() {
  const {watchedlist}=useContext(GlobalContext)
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>İzlenenen Filmler</h1>
       
    

        </div>
       
          
        {watchedlist.length >0 ?(
          <div className='movie-grid'>
            {watchedlist.map((movie)=> (
              <MovieCard movie={movie}  key={movie.id} type="watchedlist"/>
            ))    }
            </div>):(
              <h2 className='no-movies'>Listenizde Film Bulunmamaktadır..</h2>
           
        
        )}

      </div>
   
    </div>
  )
}

export default Watched