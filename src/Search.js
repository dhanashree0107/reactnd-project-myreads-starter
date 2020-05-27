import React,{Component} from 'react'
import { search } from './BooksAPI'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Search extends Component{

  state={
    query:'',
    searchedBooks:[],
    searchError: false
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
          this.setState({searchedBooks : [],searchError:true});
         }else{
          this.setState({searchedBooks : searchedBook ,searchError:false})
         }
       })
      }else{
        this.setState({searchedBooks : [] ,searchError:false});
      }
  }

    render(){
        return(<div className="search-books">
        <div className="search-books-bar">
          <Link 
          to="/" className="close-search" >Close</Link>
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
          this.state.searchedBooks.map(searchedBook =>{
            let shelf='none';
            this.props.books.map(books => 
              books.id ===searchedBook.id ? 
              shelf=books.shelf :
              '')

           return( <li key={searchedBook.id}>
              <Book book={searchedBook}
              moveShelf={this.props.moveShelf}
              currentShelf={shelf}/>
            </li>);
          }
          )
        }
        {this.state.searchError && (
                <h3>{`${this.state.query} Not Found. Please try again!`}</h3>
            )}
          </ol>
        </div>
      </div>)
    }
}

export default Search