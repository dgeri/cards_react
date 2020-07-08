import React from 'react';
import "./App.css";

 let Form =(props)=>  {
    return (
      <div>
        <form >
          <label htmlFor="fotm-title">Title</label>
          <input type='text' value={props.state.title} onChange={props.addCard} id='fotm-title'></input>
          <label htmlFor="fotm-text">Text</label>
          <input type='text' value={props.state.text}   id='fotm-text'></input>
          <button  type='submit'>Submit</button>
        </form>
      </div>
    )
  }  

export default Form;