import React from 'react';
import './App.css';
import Cards from './Cards';
import Favorites from './Favorites';
import Form from './Form'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      favorites: [],
      title:'',
      text:''
    }
  }
  async componentDidMount(){
    const url =  (`https://jsonplaceholder.typicode.com/posts`);
    const response = await fetch(url);
    const datas = await response.json();
    const data = Object.assign([], datas)
    this.setState({items:data});
  }
  addToFavorite=(e)=>{
    e.target.classList.remove('star');
    e.target.classList.add('yellow');
    let fav = e.target.parentNode.parentNode.parentNode.innerHTML;
    this.setState({favorites:this.state.favorites.concat(fav)})
  }
   addCard =(e)=>{
     let newCard={
       title:this.state.title,
       text:this.state.text,
     }
      if(e.target.value === this.state.title){
          this.setState({title:e.target.value})
      }
    this.setState({favorites:this.state.favorites.concat(newCard)}) 
  }

  render(){
    return (
      <div className='app-container'>
        <div>
          <h1>All</h1>
          <Cards cards={this.state.items} favorites={this.state.favorites} addToFavorite={this.addToFavorite}/>
        </div>
        <div>
          <h1>Favorites</h1>
          <Favorites favorites={this.state.favorites}/>
          <h1>Form</h1>
          <Form state={this.state}  addCardTitle={this.addCardTitle}/>
        </div>
      </div>
    )
  } 
}


