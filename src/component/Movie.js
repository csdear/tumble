import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/Movie.css';

const truncate = (str) => {
    return str.length > 90 ? str.substring(0, 150) + "..." : str;
  }

const Movie = ({ movie }) => {
  return (
    <div className='movie col-sm-6 col-md-4 col-sm-4'>
       <Card style={{ width: '24rem' }}>
                        <Card.Img variant="top" src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path} />
                        <Card.Body>
                          <Card.Title>{movie.name ? movie.name : movie.original_title}</Card.Title>
                          <Card.Text>
                          {truncate(movie.overview)}
                          </Card.Text>
                          <Button variant="primary">DETAILS</Button>
                        </Card.Body>
                      </Card>
    
    </div>
  );
};


export default Movie;