import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../App.css";

export default function MovieCard(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="movieCard" style={{ fontSize: "30px" }}>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
