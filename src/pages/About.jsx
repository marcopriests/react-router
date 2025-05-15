import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const About = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Homepage</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/characters'>Characters</NavLink>
            </nav>
            <h1>About</h1>
        </div>
    )
}

export default About
