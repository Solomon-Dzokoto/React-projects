import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/'>
          <a href="/">Mern .</a>
        </Link>
        <ul className="nav__menu">
          <li><Link to='/profile'>Ernest Archiver</Link></li>
          <li><Link to='/create'>Create Post</Link></li>
          <li><Link to='/author'>Author</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
        <button className="nav__toggle-btn">
          <span className='item item1'></span>
          <span className='item item2'></span>
          <span className='item item3'></span>
        </button>
      </div>
    </nav>
  )
}

export default Header
