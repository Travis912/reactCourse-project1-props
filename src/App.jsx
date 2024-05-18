/* eslint-disable react/prop-types */
import { books } from './data'
import './App.css'

export default function App() {

  const Book = ({img, author, title, rating}) => {
  
  return (
      <article className='book'>
        <img src={img} alt="book cover" />
        <h2>{title}</h2>
        <p>Written by: {author}</p>
        <button onClick={() => {
          console.log(rating)
        }}><p>view rating in console</p></button>
      </article>
    )
  }

  return (
      <section className='bookList'>
        <h1>Amazon Best Sellers</h1>
      {books.map((book) => {
        const { id }= book;
        return (
          <Book key={id} book={book} img={book.img} author={book.author} title={book.title} rating={book.rating}/>
        )
      })}
    </section>
  )
}

// Book componenet



