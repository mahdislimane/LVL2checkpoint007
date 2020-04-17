import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function MovieCard(props) {
  return (
    <div className="movieCard">
      <h3>{props.movieCard.name}</h3>
      <img className="pic" src={props.movieCard.pic} alt=""></img>
      <StarRatingComponent
        name={props.movieCard.name}
        value={props.movieCard.rating}
        starCount={"5"}
        starColor={"#ffb400"}
        emptyStarColor={"#333"}
        editing={false}
      />

      <h4>{props.movieCard.year}</h4>
    </div>
  );
}
