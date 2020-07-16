import React from 'react';
import "./App.css";

 export default class Form extends React.Component {
    
   render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="fotm-title">Title</label>
          <input type='text' name='title' id='fotm-title'></input>
          <label htmlFor="form-text">Text</label>
          <input type='text'name='body' id='form-text'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )}
  }  

