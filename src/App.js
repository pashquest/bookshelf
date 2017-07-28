import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListCurrentlyReading from './ListCurrentlyReading'
import ListToRead from './ListToRead'
import ListRead from './ListRead'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state={
    books: [],
    showSearchPage: false
        /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }
//to get all Books.
getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

// API Call to get all the Books initiall before the WebSite is rendered.
  componentDidMount() {
    this.getAllBooks()
  }

// This function is triggered within the onChange function when the bookShelf is changed.
handleChange = (bookId, newShelfValue) => {
  console.log('called handleChange: ', bookId, newShelfValue)
  console.log('Basser: ' , {id: bookId})
  BooksAPI.update({id: bookId},newShelfValue)
  this.getAllBooks()
}

  render() {
    return (
          <BookShelf books={this.state.books} handleChange={this.handleChange}/>
    )
  }
}

export default BooksApp