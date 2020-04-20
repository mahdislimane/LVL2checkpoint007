import React from "react";
import Button from "react-bootstrap/Button";

export default function MovieList(props) {
  let filtred = props.movieList.filter((el) => el.rating >= props.rateSearch);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {filtred.map((el) => {
        return (
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              margin: "20px",
              cursor: "pointer",
            }}
          >
            <h2
              onClick={() => {
                props.setmovieCard(el);
                props.setShowsec(true);
              }}
            >
              {el.name}
            </h2>
            <img
              style={{ height: "350px" }}
              src={el.pic}
              onClick={() => {
                props.setmovieCard(el);
                props.setShowsec(true);
              }}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
