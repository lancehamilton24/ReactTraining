import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'Lessons In Chemistry: A Novel';
  const author = 'Bonnie Garmus';
  const img = 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg';
  return (
    <article className='book'>
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />)