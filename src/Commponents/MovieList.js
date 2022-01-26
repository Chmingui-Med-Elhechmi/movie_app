import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <>
    {props.movies.map((movie) => (
      <div className='image-container'>
        <MovieCard movies={movie}/>
      </div>
    ))}
    </>
  )
}

export default MovieList;
