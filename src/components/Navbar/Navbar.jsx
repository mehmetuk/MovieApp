import React from 'react'
import film from '../../assets/film.png'
import home from '../../assets/home.png'
import favourite from '../../assets/favourite.png'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className='left'>
            <Link to='/' className="nav-link">
            <h1>Movie App</h1>
            </Link>
        </div>
        <div className='center'>
            <img src={film} />
        </div>
        <div className='right'>
            <ul>
                <Link to='/'>
                <li><img src={home} /></li>
                </Link>
                <Link to='/my-list'>
                <li> <img src={favourite} /></li>
                </Link>

            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
