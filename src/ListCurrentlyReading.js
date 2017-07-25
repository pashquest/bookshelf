import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListCurrentlyReading extends React.Component {
    render(){ 
        
    return(
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
    );
    }
};

export default ListCurrentlyReading