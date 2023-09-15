// typescript disable on this page

import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

export function BookLayout() {
  // const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  // console.log(searchParams.get("n"));
  // const number = searchParams.get("n");

  return (
    <>
      <div className="flex text-center p-3 space-x-4">
        <Link to="/books/1">Book 1</Link>
        <Link to="/books/2">Book 2</Link>
        <Link to="/books/3">Book 3</Link>
        {/* <Link to={`/books/` + number}> Book{number}</Link> */}
        <br />
        <Link to="/books/new">New Book </Link>
      </div>
      <Outlet context={{ hello: "good day" }} />
      {/* <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
        className="border-2 border-gray-500"
      /> */}
    </>
  );
}
