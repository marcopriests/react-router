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
        name: 'Books',
        route: '/books'
    }]

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="col-1 p-2">
                    <img src='public/duck.png' className="navbar-brand img-fluid" href="#" />
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map(link => {
                            return <li className='nav-item' key={link.id}><NavLink className='nav-link' to={link.route}>{link.name}</NavLink></li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
