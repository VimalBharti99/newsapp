import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
  }
  changeLanguage = (data) => {
    this.setState({ language: data });
  };
  changeSearch = (data) => {
    this.setState({ search: data });
  };
  render() {
    return (
      <BrowserRouter>
        <Navbar
          changeLanguage={this.changeLanguage}
          changeSearch={this.changeSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="All"
              />
            }
          />
          <Route
            path="/education"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Education"
              />
            }
          />
          <Route
            path="/politics"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Politics"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Entertainment"
              />
            }
          />
          <Route
            path="/crime"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Crime"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Sports"
              />
            }
          />
          <Route
            path="/science"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Science"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Technology"
              />
            }
          />
          <Route
            path="/bollywood"
            element={
              <Home
                search={this.state.search}
                language={this.state.language}
                q="Bollywood"
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
