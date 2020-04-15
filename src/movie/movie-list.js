import React from "react";
import Button from "react-bootstrap/Button";

export default function MovieList(props) {
  let filtred = props.movieList.filter((el) => el.rating >= props.rateSearch);
  return (
    <div>
      {filtred.map((el) => {
        return (
          <div>
            <Button
              style={{ width: 280 }}
              onClick={() => {
                props.setmovieCard(el);
              }}
            >
              {el.name}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
