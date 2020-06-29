import React from 'react';
import './App.css';
import Cards from './Cards';
import Favorites from './Favorites';
import Form from './Form'

export default class App extends React.Component {
  render(){
    return (
      <div className='app-container'>
        <div>
          <h1>All</h1>
          <Cards/>
        </div>
        <div>
          <h1>Favorites</h1>
          <Favorites/>
          <h1>Form</h1>
          <Form/>
        </div>
      </div>
    )
  } 
}


