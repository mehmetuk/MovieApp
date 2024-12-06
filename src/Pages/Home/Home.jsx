import React from 'react'
import Genre from '../../components/Genre/Genre'
import MovieList from '../../components/MovieList/MovieList'

function Home() {
  return (
    <div className='Home'>
        <Genre/>
        <MovieList/>
    </div>
  )
}

export default Home
