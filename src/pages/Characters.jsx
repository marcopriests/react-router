import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'


const Characters = () => {
    const [characters, setCharacters] = useState(null)

    const getCharacter = () => {
        axios.get('https://rickandmortyapi.com/api/character').then((res) => {
            setCharacters(res.data.results)
        })
    }

    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <div>
            <Navbar />
            {characters === null
                ? <h1>Loading...</h1>
                : <h1>Characters</h1>}
        </div>
    )
}

export default Characters
