import React from 'react'
import './components/MovieCard.css'
import StarRatings from 'react-star-ratings';
const MovieCard = ({movie}) => {
    return (
       
<div className="card movie_card">
		  <img src={movie.Poster} className="card-img-top" alt="..."/>
		  <div className="card-body">
		   <h5 className="card-title">{movie.Title}</h5>
		   		<span className="Description">{movie.Description}</span>
		   		<span className="movie_info float-right">{movie.Rate} / 5</span>
		<StarRatings 
          rating={Number(movie.Rate)}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
		  starDimension='22px'
        />
		  </div>
		</div>

			
    )
}

export default MovieCard
