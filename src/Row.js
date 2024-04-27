import React from 'react';
import { useState, useEffect } from 'react';
import './Row.css'
import axios from './axios'; 

function Row({title,fetchUrl, isLargeRow = false}) {
    const base_url = "https://image.tmdb.org/t/p/original/" ;
    const[movies, setMovies]= useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    }, [fetchUrl])

    function truncate(string, n){
      return string?.length>n ? string.substr(0, n-1) + '...' : string;
      }
  

  return (
    <div className='row'>
    <h2>{title}</h2>

    <div className='row_posters '>

   


    {movies.map(movie =>(
        (isLargeRow && movie.poster_path) ||
        ( !isLargeRow && movie.backdrop_path)) &&(
          <div className='movie_cart'>
          <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
        key={movie.id}
        src={`${base_url}${isLargeRow?movie.poster_path : movie.backdrop_path}`} 
        alt={movie.name || movie.title} /> 

        <div className='MovieName'>  {truncate((movie.name || movie.title),15)} </div>


          </div>
        
         
        
    ))}
 
 


    </div>

    

    </div>
  )
}

export default Row;