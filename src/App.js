import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import Book from './Book'
import BookShelf from './BookShelf'
import Search from './Search'
//import { Router } from 'react-router-dom'
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    
    books :[]
  }
 
  async componentDidMount(){
       BooksAPI.getAll().then((books) => {
         this.setState({books:books})
       })
       //console.log(books)
   
   }

   moveShelf =(book,shelf) => {
     BooksAPI.update(book,shelf);
     BooksAPI.getAll().then((books) => {
      this.setState({books:books})
    })
   }



  render() {
    //console.log(this.state.books)
    return (
      <div className="app">
        
        
          
          <Route exact path='/' render={() =>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf 
              books={this.state.books}
              moveShelf={this.moveShelf}/>
            </div>
            <div className="open-search">
              <Link to='/Search'>Add a book</Link>
            </div>
          </div>
          )}/>
         
          <Route path='/Search' render={() =>(
              <Search 
              moveShelf={this.moveShelf}
              books={this.state.books}/>
          )} />
          </div>
    )
  }
}

export default BooksApp
