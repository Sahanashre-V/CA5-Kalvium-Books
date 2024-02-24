import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Kalvium from "../assets/Kalvium.png";

function Nav() {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);

  // fetching data from api
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((response) => {
        const Book = response.data.books;
        console.log(Book);
        setBooks(Book);
        setDataFiltered(Book);
      })
      .catch((error) => {
        console.log("Error", error);
        if (error.response.status === 404) {
          console.log("Website not found");
        }
      });
  }, []);

  //getting the value from the input field
  const handleChange = (event) => {
    const bookName = event.target.value;
    setInput(bookName);
  };

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * 100 + 1).toFixed(2);
  };

  //filtering the data if the input value includes the values of the title
  useEffect(() => {
    const booksFiltered = books.filter(function (ele, ind) {
      return ele.title.toLowerCase().includes(input.toLowerCase());
    });
    setDataFiltered(booksFiltered);
  }, [input, books]);

  return (
    <div className="main">
      <div className="nav">
        <div className="kalviumbook">
          <img className="kalimg" src={Kalvium} alt="" />
          <h1 className="books">Books</h1>
        </div>

        <input
          type="text"
          id="inputbox"
          placeholder="Enter book name here..."
          onChange={handleChange}
        />
        {/* navigating to the next page */}
        <Link to="/register">
          <button className="register">Register</button>
        </Link>
      </div>

      <div className="booklists">
        {dataFiltered.map(function (element, index) {
          const randomPrice = generateRandomPrice(); // Generate random price for each book
          return (
            <div key={index} className="booklist">
              <img
                className="bookimg"
                src={element.imageLinks.smallThumbnail}
                alt={element.title}
              />
              <p>{element.title}</p>
              <p>
                {element.averageRating
                  ? element.averageRating + "⭐"
                  : `${(Math.floor(Math.random() * 5 + 1).toFixed(1))}⭐`}
              </p>
              <div>
                <div>
                  <p className="price">{randomPrice}</p>
                  <span className="free"> Free</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
