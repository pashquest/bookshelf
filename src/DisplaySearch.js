import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DisplaySearch extends React.Component {
    render(){
    
    return(
        <ol className="books-grid">
        {this.props.books.map((book) => (
            <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value = {book.shelf}>
                                <option value="none">Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                        </div>
                    </div>
                 <div className="book-title">{book.title}</div>
                 <div className="book-authors">{book.authors}</div>
            </div>
            </li>
        ))}
        </ol>
    );
    }
};

export default DisplaySearch