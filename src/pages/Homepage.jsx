import React from 'react'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Homepage</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/characters'>Characters</NavLink>
            </nav>
            <h1>Homepage</h1>
        </div>
    )
}

export default Homepage
