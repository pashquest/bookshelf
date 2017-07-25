
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListCurrentlyReading from './ListCurrentlyReading'
import ListToRead from './ListToRead'
import ListRead from './ListRead'

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
      <div className="app">
        {this.state.showSearchPage ? ( 
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books"> 
                  <ListCurrentlyReading books={this.state.books} handleChange={this.handleChange}/>  
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <ListToRead books={this.state.books} handleChange={this.handleChange}/>  
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ListRead books={this.state.books} handleChange={this.handleChange}/>  
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
