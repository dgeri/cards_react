import React from 'react';
import "./App.css";

export default class Cards extends React.Component {
  render(){
    return (
      <div>
        <ul>
        {this.props.cards.map((item) =>(
          <li key={item.id}>
            <div className='card'>
              <div className='title-container'>
                <div className='card-title'>{item.title}</div>
                <div className='btn-container'>
                  <button className='btn-favorite star' onClick={(e)=>this.props.addToFavorite(e,item)}></button> 
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
}
