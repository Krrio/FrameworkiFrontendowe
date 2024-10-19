import React from 'react'
import books from '../data/module-data.js';


const Lab1Pages = () => {
  return (
    <main>
        <h1>Book List</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} (Released: {book.releaseDate})
            </li>
          ))}
        </ul>
      </main>
  )
}

export default Lab1Pages