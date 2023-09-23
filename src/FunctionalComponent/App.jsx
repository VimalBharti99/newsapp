import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

export default function App () {
   let [language,setLanguage] = useState("hi")
   let [search,setSearch] = useState("")
   let changeLanguage = (data) => {
    setLanguage(data)
  };
   let changeSearch = (data) => {
    setSearch(data)
  };
    return (
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search}language={language}q="All"/>}/>
          <Route path="/education" element={<Home search={search}language={language}q="Education"/>}/>
          <Route path="/politics" element={<Home search={search}language={language}q="Politic"/>}/>
          <Route path="/entertainment" element={<Home search={search}language={language}q="Entertainment"/>}/>
          <Route path="/crime" element={<Home search={search} language={language}q="Crime"/>}/>
          <Route path="/sports" element={<Home search={search} language={language}q="Sports"/>}/>
          <Route path="/science" element={<Home search={search} language={language} q="Science"/>}/>
          <Route path="/technology" element={<Home search={search} language={language} q="Technology"/>}/>
          <Route path="/bollywood" element={<Home search={search} language={language} q="Bollywood"/>}/>
          <Route path="/jokes"  element={<Home search={search} language={language} q="jokes"/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

