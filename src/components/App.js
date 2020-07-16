import React from 'react';
import './App.css';
import Cards from './Cards';
import Favorites from './Favorites';
import Form from './Form'
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

export default class App extends React.Component {
    state={
      items: [],
      favorites: [],
    }
   handleSubmit=(e)=>{
    e.preventDefault();
    const cards = {}
    e.target.childNodes.forEach(function(el){
      if(el.tagName ==='INPUT')
      cards[el.name] = el.value
    })
    const newCards = this.state.items.slice()
    newCards.push(cards)
    this.setState({
      items:newCards
    })
  }
    addToFavorite=(e,favorite)=>{
      e.target.classList.add('yellow');
      const { favorites } = this.state;
        if (!favorites.some(alreadyFavorite => alreadyFavorite.id === favorite.id)) {
          this.setState({
            favorites: [...this.state.favorites, favorite]
          });
        }
      };
  getList = async () => {
    const api =
      "https://jsonplaceholder.typicode.com/posts";
    await axios
      .get(api)
      .then(response => {
        this.setState({
          items: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getList();
  }
 

  render(){
    return (
      <Router>
        <div className='app-container'>
          <div className='cards-wrapper'>
            <Route path="/" exact render={() => (
            <div>
              <h1>All</h1> 
              <Cards cards={this.state.items}  addToFavorite={this.addToFavorite}/>   
          </div> )}
            />
          </div>
          <div className='favorites-wrapper'>
            <h1>Favorites</h1>
            <Favorites favorites={this.state.favorites}/>
            <h1>Add new</h1>
            <Form state={this.state} handleSubmit={this.handleSubmit}/>
          </div>
      </div>
    </Router>
  )
  } 
}


