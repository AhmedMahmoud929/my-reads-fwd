import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchPage = ({
  searchInput,
  searchHandler,
  searchResult,
  searchState,
  // for Book comp
  updateFunc,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={searchHandler}
            value={searchInput}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResult && searchState === "Found" ? (
            searchResult.map((book) => (
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
          ) : (
            <center>{searchState}</center>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
