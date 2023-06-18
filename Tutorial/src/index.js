import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [{
  author: 'Bonnie Garmus',
  title: 'Lessons In Chemistry: A Novel',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg',
  id: 1
},
{
  author: 'Cormac McCarthy',
  title: 'Blood Meridian: Or the Evening Redness in the West',
  img: 'https://images-na.ssl-images-amazon.com/images/I/A1l6F+A98ZL._AC_UL600_SR600,400_.jpg',
  id: 2
}]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />)