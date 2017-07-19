import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListCurrentlyReading extends React.Component {
state={ 
    value: "wantToRead"
}

handleChange(event) {
    this.setState({value: event.target.value})
  }

    render(){ 
    return(
        <ol className="books-grid">
        {this.props.books.filter(book => book.shelf === "currentlyReading").map((book) => (
            <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
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