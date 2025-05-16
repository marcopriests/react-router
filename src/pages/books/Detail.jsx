import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Detail = () => {
    const params = useParams()
    const [book, setBook] = useState(null)

    const id = parseInt(params.id)

    const navigate = useNavigate()

    const getSingleBook = () => {
        axios.get(`https://potterapi-fedeperin.vercel.app/it/books/?index=${id}`).then(res => {
            setBook(res.data)
        })
    }

    useEffect(() => {
        getSingleBook()
    }, [])

    useEffect(() => {
        getSingleBook()
    }, [id])

    return (
        <>
            {!book
                ? <h1>Loading...</h1>
                : <div className='container p-5'>
                    <div className='d-flex justify-content-between mb-3'>
                        <div className="col-4 p-3">
                            <img src={book.cover} alt="" className="img-fluid" />
                        </div>
                        <div className="col-8 p-3 d-flex flex-column justify-content-between">
                            <div>
                                <div className="badge text-bg-primary">Book</div>
                                <h2 className='fw-bold'>{book.title}</h2>
                                <h4 className="fw-semibold fst-italic">{book.originalTitle}</h4>
                                <p className='fw-semibold'>di <span className='text-decoration-underline'>Autore Cognome</span></p>
                            </div>

                            <div>
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <td scope="col" className="text-center">Numero pagine</td>
                                            <td scope="col" className="text-center">Lingua</td>
                                            <td scope="col" className="text-center">Editore</td>
                                            <td scope="col" className="text-center">Anno di pubblicazione</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="text-center"><i className="fa-solid fa-book"></i></td>
                                            <td className="text-center"><i className="fa-solid fa-earth-europe"></i></td>
                                            <td className="text-center"><i className="fa-solid fa-building-user"></i></td>
                                            <td className="text-center"><i className="fa-solid fa-calendar-days"></i></td>
                                        </tr>
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <th className="text-center">{book.pages}</th>
                                            <th className="text-center">Italiano</th>
                                            <th className="text-center">Mondadori</th>
                                            <th className="text-center">{book.releaseDate}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className='d-flex align-items-center'>
                                <div className="col-10 btn btn-danger fw-semibold">Trova Libro</div>

                                <div className="col-2 p-3 fa-regular fa-heart text-danger"></div>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <h5 className='fw-bold'>Descrizione</h5>
                        <p>{book.description}</p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="fa-solid fa-arrow-left p-2 btn btn-outline-danger mx-1" onClick={() => navigate(`/books/${id - 1}`)}></div>
                        <div className="fa-solid fa-arrow-right p-2 btn btn-outline-danger mx-1" onClick={() => navigate(`/books/${id + 1}`)}></div>
                    </div>
                </div>}

        </>
    )
}

export default Detail
