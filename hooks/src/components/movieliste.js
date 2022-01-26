import React from 'react';
import MovieCard from './components/moviecard'
function movieliste(props) {
  return <div>
      {props.movies.map((movie) => (
          <div>
          <img src={movie.Poster} alt='movie'></img>
          <MovieCard movies={movie}/>
      </div>
      )
      )}
  </div>;
}

export default movieliste;
