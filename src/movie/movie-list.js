import React from "react";
import Button from "react-bootstrap/Button";

export default function MovieList(props) {
  let rateSearchPlus = props.rateSearch + 1;
  let filtred = props.movieList.filter((el) => el.rating >= props.rateSearch);
  let refiltred = filtred.filter((el) => el.rating < rateSearchPlus);
  return (
    <div>
      {props.rateSearch
        ? refiltred.map((el) => {
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
          })
        : props.movieList.map((el) => {
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
