import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import DisplaySearch from './DisplaySearch'
import App from './App'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  state={ srBooks: [] }

//Search for Books that matches the SearchCriteria and map the correct Shelf Value
searchBooks = (SearchCriteria) => {
  BooksAPI.search(SearchCriteria).then(res => {
  const resBooks=res.map(srBook=> { 
    let shelf = "none"
    let existBook
    if(existBook = this.props.books.find(exBook => exBook.id === srBook.id))
       {
        shelf = existBook.shelf
       }
    return {
        id: srBook.id,
        shelf: shelf,
        authors: srBook.authors,
        title: srBook.title,
        imageLinks: {
            thumbnail: srBook.imageLinks.thumbnail
            }
    }
  })
    this.setState({ srBooks: resBooks });
})}

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