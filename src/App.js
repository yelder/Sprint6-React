import React from 'react'
import Book from './components/book'
import Biblioteca from './biblioteca.json'

function App() {
  
  const BibliotecaLibros= Biblioteca.map(book => <Book title={book.title} author={book.author}/>) 
  return (
    <div>
    {BibliotecaLibros}
    </div>
  )
}

export default App;
