import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

export default function MovieCard(props) {
  return (
    <div className="movieCard">
      <h3>{props.movieCard.name}</h3>
      <img className="pic" src={props.movieCard.pic} alt=""></img>
      <Rater rating={props.movieCard.rating} total={5} interactive={false} />
      <h4>{props.movieCard.year}</h4>
    </div>
  );
}
