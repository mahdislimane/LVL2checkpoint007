import React, { useState, useEffect } from "react";
import MovieList from "./movie/movie-list";
import MovieCard from "./movie/movie-card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

export default function Movie(props) {
  const [keyword, setKeyword] = useState("");
  const [rateSearch, setrateSearch] = useState("");
  const [newMovie, setnewMovie] = useState({
    name: "",
    pic: "",
    rating: 0,
    year: 0,
  });
  const [movieCard, setmovieCard] = useState({
    name: "SONIC LE FILM",
    pic: "https://fr.web.img3.acsta.net/pictures/20/02/10/17/16/0746079.jpg",
    rating: 3.4,
    year: "2020",
  });
  const [movieList, setmovieList] = useState([
    {
      name: "SONIC LE FILM",
      pic: "https://fr.web.img3.acsta.net/pictures/20/02/10/17/16/0746079.jpg",
      rating: 3.4,
      year: 2020,
    },
    {
      name: "L'APPEL DE LA FORÊT",
      pic:
        "https://yc.cldmlk.com/tn029qswebz1gahz3xzzhb7x44/1578345436441_Poster.jpg",
      rating: 4,
      year: 2020,
    },
    {
      name: "AVENGERS: ENDGAME",
      pic: "https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg",
      rating: 4,
      year: 2019,
    },
  ]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const addMovie = () => {
    newMovie.name
      ? newMovie.pic
        ? newMovie.rating
          ? newMovie.year
            ? setmovieList([...movieList, newMovie])
            : alert("please insert a year")
          : alert("please insert a rate")
        : alert("please insert a picture URL")
      : alert("please insert a name");
    handleClose();
    setnewMovie({ name: "", pic: "", rating: 0, year: 0 });
    alert("movie added");
  };
  useEffect(() => {
    document.title = `${movieCard.name}`;
  }, [movieCard]);
  return (
    <div className="container-fluid row">
      <div className="col-4 movieList">
        <div style={{ display: "flex" }}>
          <div className="search">
            <input
              type="text"
              placeholder="search..."
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            ></input>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic-button">
                search by rating
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setrateSearch(1)}>
                  <img className="star" src="./star.png" alt="" />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setrateSearch(2)}>
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setrateSearch(3)}>
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setrateSearch(4)}>
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setrateSearch(5)}>
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                  <img className="star" src="./star.png" alt="" />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setrateSearch("")}>
                  All
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Button onClick={handleShow}>+</Button>
        </div>
        <MovieList
          rateSearch={rateSearch}
          movieList={movieList.filter((el) =>
            el.name.toUpperCase().includes(keyword.toUpperCase())
          )}
          setmovieCard={(x) => setmovieCard(x)}
        />
      </div>

      <div className="col-8">
        <MovieCard movieCard={movieCard} />
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid row">
              <div className="col-4">Name: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="name"></input>
              </div>
              <div className="col-4">Picture URL: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="pic"></input>
              </div>
              <div className="col-4">Rate: </div>
              <div className="col-8">
                <input
                  type="number"
                  onChange={handleChange}
                  name="rating"
                ></input>
              </div>
              <div className="col-4">Year: </div>
              <div className="col-8">
                <input
                  type="number"
                  onChange={handleChange}
                  name="year"
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
