import React from 'react'
import { NavLink } from 'react-router-dom'

const BookCard = ({ book }) => {
    return (
        <div className='container-fluid p-3'>
            <div className='p-3 d-flex border rounded-5'>
                <div className='col-3 p-3'>
                    <img src={book.cover} alt="" className="img-fluid" />
                </div>
                <div className="col-9 p-3">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h5 className='fw-bold'>{book.title}</h5>
                            <p className="fw-semibold">{book.originalTitle}</p>
                            <p className="fst-italic text-secondary mb-3">{book.releaseDate}</p>
                        </div>
                        <div>
                            <NavLink to='/detail' className='btn btn-outline-danger'>Vai al dettaglio</NavLink>
                        </div>
                    </div>

                    <h5 className='fw-semibold mb-3'>Trama</h5>
                    <p>
                        {book.description}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default BookCard
