import React, { useEffect, useState } from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import { getAll, update, search } from "./BooksAPI";

function App() {
  // States
  const [allBooks, setAllBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchState, setSearchState] = useState("");

  // Functions
  const getAllBooks = () => {
    getAll().then((apiData) => {
      setAllBooks(apiData);
      // console.log(apiData);
    });
  };
  const updateBooks = (book, newShelf) => {
    update(book, newShelf).then(() => {
      getAllBooks();
    });
  };
  const searchHandler = (e) => {
    const query = e.target.value;
    setSearchInput(query);
    if (query === "") {
      setSearchResult([]);
      setSearchState("");
    } else {
      search(query).then((data) => {
        if (data.error) {
          setSearchResult([]);
          setSearchState("Not Found");
        } else {
          setSearchState("Found");
          setSearchResult(data);
          // console.log(data);
        }
      });
    }
  };

  // Effects
  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              allBooks={allBooks}
              updateBooks={updateBooks}
              getAllBooks={getAllBooks}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              searchInput={searchInput}
              searchResult={searchResult}
              searchState={searchState}
              getAllBooks={getAllBooks}
              searchHandler={searchHandler}
              updateFunc={updateBooks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
