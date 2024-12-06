import React from 'react'
import './MovieCard.css'
import { API_IMG } from '../../constans/api'
import { FaStar } from "react-icons/fa";

function MovieCard({movie}) {
const {id,title,poster_path,vote_average}=movie    

  return (
    <div className='movie-card'>
    <div className="gradient"></div>

      <img src={`${API_IMG}/${poster_path}`} alt={movie.title} />

      <div className="movie-info">
        <div className="movie-rating">
            <p>{vote_average.toFixed(1)}</p>
            <FaStar />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
