import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      search : ""
    }
  }
  getInputData(e){
    this.setState({search:e.target.value})
  }
  postData(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
  }
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-info sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/" onClick={()=>{this.props.changeSearch(' ')
    this.setState({search:""})}}>NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" onClick={()=>{this.props.changeSearch(' ')
        this.setState({search:""})}}>All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/education" onClick={()=>{this.props.changeSearch(' ')
        this.setState({search:""})}}>Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics" onClick={()=>{this.props.changeSearch(' ')
        this.setState({search:""})}}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" onClick={()=>{this.props.changeSearch(' ')
        this.setState({search:""})}}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/crime" onClick={()=>{this.props.changeSearch(' ')
        this.setState({search:""})}}>Crime</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/sports" onClick={()=>{this.props.changeSearch(' ')
            this.setState({search:""})}}>sports</Link></li>
            <li><Link className="dropdown-item" to="/science" onClick={()=>{this.props.changeSearch(' ')
            this.setState({search:""})}}>science</Link></li>
            <li><Link className="dropdown-item" to="/technology" onClick={()=>{this.props.changeSearch(' ')
            this.setState({search:""})}}>Technology</Link></li>
            <li><Link className="dropdown-item" to="/bollywood" onClick={()=>{this.props.changeSearch(' ')
            this.setState({search:""})}}>Bollywood</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/jokes" onClick={()=>{this.props.changeSearch(' ')
            this.setState({search:""})}}>Jokes</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('hi')}>Hindi</button></li>
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('en')}>English</button></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
        <input className="form-control me-2" type="search" name='search' onChange={(e)=>this.getInputData(e)} placeholder="Search" aria-label="Search" value={this.state.search}/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}

