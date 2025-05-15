import React from 'react'
import { NavLink } from 'react-router-dom'
import Homepage from '../pages/Homepage'

const links = [
    {
        id: 1,
        name: 'Homepage',
        route: '/'
    },
    {
        id: 2,
        name: 'About',
        route: '/about'
    },
    {
        id: 3,
        name: 'Characters',
        route: '/characters'
    }]

const Navbar = () => {
    return (
        <nav className='d-flex align-items-center justify-content-between p-4'>
            <div className='col-2'>
                <img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" />
            </div>
            <div className="col-10 d-flex justify-content-end">
                <ul className='list-style-unstyle'>
                    <li><NavLink to='/'>Homepage</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/characters'>Vharacters</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
