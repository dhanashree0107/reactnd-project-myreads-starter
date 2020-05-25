import React,{Component} from 'react'
import Book from './Book'

class BookShelf extends Component{
    
    render(){
        //const {books} = this.props
        console.log(this.props.books)
        return(
        <div>

<div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                       
                  {this.props.books.filter((book) => book.shelf ==='currentlyReading')
                  .map(book =>(
                    <li key={book.id}> 
                    <Book 
                    book={book}
                    moveShelf={this.props.moveShelf}/>
                     </li>
                  ))
                  }
                 
                     
                    </ol>
                  </div>
        </div>
        
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                       
                  {this.props.books.filter((book) => book.shelf ==='wantToRead')
                  .map(book =>(
                    <li key={book.id}> 
                    <Book 
                    book={book}
                    moveShelf={this.props.moveShelf}
                    />
                     </li>
                  ))
                  }
                 
                     
                    </ol>
                  </div>
        </div>

        <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                       
                  {this.props.books.filter((book) => book.shelf ==='read')
                  .map(book =>(
                    <li book={book.id}> 
                    <Book 
                    book={book}
                    moveShelf={this.props.moveShelf}
                    />
                     </li>
                  ))
                  }
                 
                     
                    </ol>
                  </div>
        </div>

        </div>
        )
    }
}

export default BookShelf