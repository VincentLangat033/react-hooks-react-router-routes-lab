import React from "react";
import { directors } from "../data";

function Directors() {
  const myDirectors = directors.map((director)=>(
    <div key={director.name}>
    <div> {director.name}</div>
    <ul>
      {director.movies.map((movie)=>(
        <li key={movie}>{movie}</li>
        ))}

      
    </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {myDirectors}

  </div>;
}

export default Directors;
