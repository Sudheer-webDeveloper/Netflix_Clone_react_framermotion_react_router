import React from "react";
import "./app.css";
import "./responsive.css"
import Home from "./components/Homepage/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Listpage";
import MovieIndex from "./components/movies";
import SingelPageIndex from "./components/SinglePage/SingelPageIndex";
import Nopage from "./components/Nopage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netflix" element={<Index />} />
          <Route path="/netflix/:id" element={<SingelPageIndex />} />
          <Route path="/netflix/movies" element={<MovieIndex />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
