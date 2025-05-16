import React from 'react'
import Navbar from '../../components/Navbar'

const Detail = () => {
    return (
        <>
            <div className='container p-5'>
                <div className='d-flex justify-content-between mb-3'>
                    <div className="col-4 p-3">
                        <img src="https://picsum.photos/400/600" alt="" className="img-fluid" />
                    </div>
                    <div className="col-8 p-3 d-flex flex-column justify-content-between">
                        <div>
                            <div className="badge text-bg-primary">Book</div>
                            <h2 className='fw-bold'>Titolo grande grande grande</h2>
                            <h4 className="fw-semibold fst-italic">Titolo Originale</h4>
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
                                        <th className="text-center">1049</th>
                                        <th className="text-center">Italiano</th>
                                        <th className="text-center">Mondadori</th>
                                        <th className="text-center">2016</th>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sapiente iure a optio voluptate doloribus ducimus, eaque unde voluptates iste ipsum molestiae eligendi temporibus id distinctio! Ullam tempora aut quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae odit voluptatibus nostrum ratione! Voluptatem atque asperiores voluptates. Autem ipsum, assumenda quos magni, cum sed expedita vel et repellendus sequi alias.</p>
                </div>
            </div>
        </>
    )
}

export default Detail
