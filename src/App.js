import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import Book from './Book'
import BookShelf from './BookShelf'
import Search from './Search'
import { Router } from 'react-router-dom'
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    
    books :[]
  }
 
   componentDidMount(){
       BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
   
   }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        
         <Route path='/' component={Search}/>
          <Route path='/' render={() =>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf />
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
          )}/>
        </div>
    )
  }
}

export default BooksApp
