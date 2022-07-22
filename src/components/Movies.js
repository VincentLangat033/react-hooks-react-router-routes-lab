import React from "react";
import { movies } from "../data";

function Movies() {

     const myMovies = movies.map( (movie)=>
        (
        <div key={movie.title}>
          <h1>{movie.title}</h1>
          <h1>{movie.time}</h1>
          <ul>
            <li>{movie.genres}</li>

          </ul>


        </div>)
      


      


    )
  
  return( <div>
    <h1>Movies Page</h1>
    <div>{myMovies}</div>
  
  
  </div>);
}

export default Movies;
