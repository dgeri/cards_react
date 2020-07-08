import React from 'react';
import "./App.css";

 let Cards =(props)=> {
    return (
      <div>
        <ul>
        {props.cards.map((item) =>(
          <li key={item.id}>
            <div className='card'>
              <div className='title-container'>
                <div className='card-title'>{item.title}</div>
                <div className='btn-container'>
                  <button className='btn-favorite star' onClick={props.addToFavorite}></button> 
                </div>         
              </div>
              <div className='card-body'>{item.body}</div>
            </div>
          </li>
          ))}
        </ul>
      </div>
    )
  }  
  
export default Cards;