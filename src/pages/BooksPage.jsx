import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/module-data'; 

const BooksPage = () => {
  const { id } = useParams(); 
  const bookId = parseInt(id, 10); 
  
  const book = data.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Release Date:</strong> {book.releaseDate}</p>
    </div>
  );
};

export default BooksPage;
