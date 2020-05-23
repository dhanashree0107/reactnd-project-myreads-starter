import React, {Component} from 'react'
import Book from './Book';


class SingleShelf extends Component{
      render(){
          const {books} = this.props
          return(
          <div className="bookshelf-books">
          <ol className="books-grid">
              {
                  
                  <Book key={books}/>
              }
              </ol>
              </div>
              );
      }
}

export default SingleShelf