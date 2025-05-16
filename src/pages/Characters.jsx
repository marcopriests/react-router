import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'


const Characters = () => {
    const [characters, setCharacters] = useState([])

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
            <div className="container-fluid p-5">
                <h1>Characters</h1>
                <div className="row">
                    {characters.map(char => {
                        return <CharacterCard char={char} key={char.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Characters
