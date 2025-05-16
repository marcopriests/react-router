import React from 'react'
import Navbar from '../../components/Navbar'

const Detail = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid p-5 d-flex'>
                <div className="col-6 p-3">
                    <img src="https://picsum.photos/400/600" alt="" className="img-fluid" />
                </div>
                <div className="col-6 p-3">
                    <h2 className='fw-bold'>Titolo</h2>
                    <h4 className="fw-semibold">Titolo Originale</h4>
                    <h5>Autore</h5>
                    <p className="fst-italic text-secondary mb-3">Data di uscita</p>
                </div>
            </div>
        </>
    )
}

export default Detail
