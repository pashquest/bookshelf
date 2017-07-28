import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

class BookShelf extends React.Component {
    render(){ 
        
    return(
        <div className="app">
        <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>
        <div className="list-books-content">
        <div>
        {/* CurrentlyReading */}
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books"> 
        <ol className="books-grid">
        {this.props.books.filter(book => book.shelf === "currentlyReading").map((book) => (
            <li key={book.id}>
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select onChange={(e) => this.props.handleChange(book.id, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" selected >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            </li>
        ))}
        </ol> 
        </div>
        </div>
        {/* Want to Read*/}
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books"> 
        <ol className="books-grid">
        {this.props.books.filter(book => book.shelf === "wantToRead").map((book) => (
            <li key={book.id}>
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select onChange={(e) => this.props.handleChange(book.id, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" selected >Currently Reading</option>
                    <option selected value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            </li>
        ))}
        </ol> 
        </div>
        </div>
        {/* Read*/}
        <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books"> 
        <ol className="books-grid">
        {this.props.books.filter(book => book.shelf === "read").map((book) => (
            <li key={book.id}>
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select onChange={(e) => this.props.handleChange(book.id, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" selected >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option selected value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            </li>
        ))}
        </ol> 
        </div>
        </div>
        
        </div>
        </div>
        </div>
        <div className="open-search">
              <Link to="/search">Add a book</Link>
        </div>
        </div>
    )
    }
}

export default BookShelf