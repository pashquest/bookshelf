import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import DisplaySearch from './DisplaySearch'
import * as BooksAPI from './BooksAPI' // This * makes it import everything from a file or Package.

class SearchBooks extends React.Component {
  state={ srBooks: [] }


searchBooks = (SearchCriteria) => {
  BooksAPI.search(SearchCriteria).then(srBooks => {
    console.log(srBooks)
    this.setState({ srBooks })})
}

srHandleChange = (bookId, newShelfValue) => {
  BooksAPI.update({id: bookId},newShelfValue)
  console.log(bookId, newShelfValue)
  //this.searchBooks("IOs")
}


  render(){

  return (
    <div className="search-books">
    <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
    <div className="search-books-input-wrapper">
      <input type="text" placeholder="Search by title or author"
       onChange={(event) => {this.searchBooks(event.target.value)}} />
    </div>
    </div>
      <div className="search-books-results">
      <DisplaySearch books = {this.state.srBooks} handleChange={this.srHandleChange} />
    </div>
    </div> 

)}}

export default SearchBooks