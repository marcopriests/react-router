import React from 'react'

const CharacterCard = (prop) => {
    const { char } = prop
    console.log(char)
    return (
        <div className='p-2 mb-3 col-lg-3 col-md-4 col-sm-6'>
            <div className="card">
                <img src={char.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{char.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
