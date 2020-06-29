import React from 'react';
import "./App.css";

export default class Form extends React.Component  {
  render(){
    return (
      <div>
        <form>
          <label for="fotm-title">Title</label>
          <input type='text' id='fotm-title'></input>
          <label for="fotm-text">Text</label>
          <input type='text'  id='fotm-text'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }  
  }
