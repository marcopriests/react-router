import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BookCard from '../../components/BookCard'


const Books = () => {
    const [books, setBooks] = useState(null)

    const getBooks = () => {
        axios.get('https://potterapi-fedeperin.vercel.app/it/books/').then(res => {
            setBooks(res.data)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <div className="container-fluid p-5">
                <h1>Books</h1>
                {!books
                    ? <h3>Loading...</h3>
                    : books.map((book) => {
                        return <BookCard book={book} key={book.index} />
                    })
                }

            </div>
        </div>
    )
}

export default Books
