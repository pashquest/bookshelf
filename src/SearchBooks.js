import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import DisplaySearch from './DisplaySearch'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  state={ srBooks: [] }

//Search for Books that matches the SearchCriteria
searchBooks = (SearchCriteria) => {
  BooksAPI.search(SearchCriteria).then(srBooks => {
    console.log(srBooks) 
    this.setState({ srBooks })})
}

srHandleChange = (bookId, newShelfValue) => {
  BooksAPI.update({id: bookId},newShelfValue).then(UpdateResult => console.log("Ausgabe: ", UpdateResult))
  console.log(bookId, newShelfValue)
}


  render(){
  return (
    <div className="search-books">
    <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={() => (console.log("OnCklick function"), this.props.getAllBooks())}>Close</Link>
    <div className="search-books-input-wrapper">
      <input type="text" placeholder="Search by title or author"
       onChange={(event) => {this.searchBooks(event.target.value)}} />
    </div>
    </div>
      <div className="search-books-results">
      <DisplaySearch srBooks = {this.state.srBooks} handleChange={this.srHandleChange} />
    </div>
    </div> 

)}}

export default SearchBooks