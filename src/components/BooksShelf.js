import React, { useEffect } from "react";
import Book from "./Book";

const BooksShelf = ({ title, category, allBooks, updateFunc }) => {
  // States
  // Functions

  // Effects
  useEffect(() => {}, []);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            /* Loop on books */

            allBooks
              .filter((book) => book.shelf === category)
              .map((book) => (
                <Book
                  key={book.id}
                  id={book.id}
                  updateFunc={updateFunc}
                  cover={book.imageLinks}
                  shelf={book.shelf}
                  title={book.title}
                  authors={book.authors}
                />
              ))
          }
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
