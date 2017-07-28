import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI' // This * makes it import everything from a file or Package.

class SearchBooks extends React.Component {
  render(){
  return (
    <div>
    <div className="search-books">
    <div className="search-books-bar">
    <Link className="close-search" to="/">Close</Link>
    <div className="search-books-input-wrapper">
      <input type="text" placeholder="Search by title or author"/>
    </div>
    </div>
      <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
    </div> 
    </div>

)}}

export default SearchBooks