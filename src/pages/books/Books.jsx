import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import BookCard from '../../components/BookCard'

const Books = () => {
    const [state, setState] = useState('')

    const getBooks = () => {
        axios.get('https://potterapi-fedeperin.vercel.app/it/books/').then(res => {
            setState(res.data)
            console.log(res.data[0])
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <div className="container-fluid p-5">
                <h1>Books</h1>
                {!state
                    ? <h3>Loading...</h3>
                    : state.map((book) => {
                        return <BookCard book={book} key={book.index} />
                    })
                }

            </div>
        </div>
    )
}

export default Books
