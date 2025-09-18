
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./pages/home";
import Items from "./pages/items";

import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/items" className="text-blue-500">Items</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
