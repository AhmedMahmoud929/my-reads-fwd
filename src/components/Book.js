import React, { useState } from "react";
import { get } from "../BooksAPI";

const Book = ({ id, cover, title, shelf, authors, updateFunc }) => {
  // States
  const [shelfState, setShelfState] = useState(shelf);
  // Functions
  const updateShelf = (e) => {
    const newShelf = e.target.value;
    setShelfState(newShelf);
    get(id).then((book) => {
      updateFunc(book, newShelf);
    });
  };
  if (!shelf) {
    get(id).then((book) => {
      setShelfState(book.shelf);
    });
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                cover
                  ? cover.thumbnail
                    ? cover.thumbnail
                    : cover.smallThumbnail
                    ? cover.smallThumbnail
                    : ""
                  : ""
              }")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={shelf ? shelf : shelfState} onChange={updateShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              {shelfState !== "none" && <option value="none">None</option>}
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(" - ")}</div>
      </div>
    </li>
  );
};

export default Book;
