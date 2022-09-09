import React from "react";
import BooksShelf from "./BooksShelf";
import { Link } from "react-router-dom";

const MainPage = ({ allBooks, updateBooks }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {allBooks.length ? (
            <>
              <BooksShelf
                title="Current Reads"
                category="currentlyReading"
                allBooks={allBooks}
                updateFunc={updateBooks}
              />
              <BooksShelf
                title="Want to Read"
                category="wantToRead"
                allBooks={allBooks}
                updateFunc={updateBooks}
              />
              <BooksShelf
                title="Read"
                category="read"
                allBooks={allBooks}
                updateFunc={updateBooks}
              />
            </>
          ) : (
            <div className="loader"></div>
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
