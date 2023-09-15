import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";
import Books from "./pages/Books";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import { BookLayout } from "./pages/BookLayout";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <p className=" font-bold underline text-red-600 flex justify-center ">
        Simple React Typescript Tailwind Sample
      </p>
      <Routes>
        <Route path="/Books" element={<h1>Extra content</h1>} />
      </Routes>
      <nav className="flex text-center">
        <ul>
          <li>
            <NavLink to="/" state={"aaaa"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" state={"hi"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink end to="/books">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/books/new">New Book</NavLink>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<BookLayout />}>
            <Route index element={<Books />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
