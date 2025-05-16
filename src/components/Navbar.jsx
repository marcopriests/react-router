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
        <nav className='bg-body-tertiary'>
            <div className="d-flex align-items-center p-5">
                <div className='col-2'>
                    <img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" />
                </div>
                <div className="col-10 d-flex justify-content-end">
                    <ul className='nav'>
                        {links.map(link => {
                            return <li className='nav-item ms-3' key={link.id}><NavLink className='text-decoration-none text-success fw-semibold' to={link.route}>{link.name}</NavLink></li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
