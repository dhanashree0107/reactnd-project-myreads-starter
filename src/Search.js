import React,{Component} from 'react'
import { search } from './BooksAPI'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Search extends Component{

  state={
    query:'',
    searchedBooks:[]
  }

  updateQuery = query =>{
    
    this.setState({query:query})
    //console.log(query)
    this.updateSearchedBooks(query);
  }

  updateSearchedBooks = (query) =>{
      if(query){
       BooksAPI.search(query).then(searchedBook => {
         if(searchedBook.error){
          this.setState({searchedBooks : []});
         }else{
          this.setState({searchedBooks : searchedBook})
         }
       })
      }else{
        this.setState({searchedBooks : []});
      }
  }

    render(){
        return(<div className="search-books">
        <div className="search-books-bar">
          <Link 
          to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            
            <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
        {
          this.state.searchedBooks.map(searchedBook =>
            <li key={searchedBook.id}>
              <Book book={searchedBook}
              moveShelf={this.props.moveShelf}/>
            </li>
          )
        }
          </ol>
        </div>
      </div>)
    }
}

export default Search