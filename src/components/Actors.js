import React from "react";
import { actors } from "../data";

function Actors() {
  const myActors=actors.map((actor)=>(
    <div key={actor.name}>
      <div>{actor.name}</div>
      <ul >
        {actor.movies.map((actor)=>(
        <li key={actor}>{actor}</li>
        ))}
      </ul>

    </div>


  ))
  return <div>
    <h1>Actors Page</h1>
    {myActors}
  </div>;
}

export default Actors;
