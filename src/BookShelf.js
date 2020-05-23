import React,{Component} from 'react'
import SingleShelf from './SingleShelf'

class BookShelf extends Component{
    render(){
        return(
        <div>

            <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <SingleShelf Books={this.props.books.filter((book) => 
            book.shelf==='currentlyReading')}/>
        </div>
        </div>

        <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <SingleShelf Books={this.props.books.filter((book) => 
            book.shelf==='wantToRead')}/>
        </div>
        </div>

        <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <SingleShelf Books={this.props.books.filter((book) => 
            book.shelf==='read')}/>
        </div>
        </div>
        </div>
        )
    }
}

export default BookShelf