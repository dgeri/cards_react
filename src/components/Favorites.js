import React from 'react';


export default class Favorites extends React.Component {
 
  render(){
  const { favorites } = this.props;
     return (
      <div >
      <ul>
      {favorites.map(card => {
        return (
          <li key={card.id}>
          <div className='card'>
          <div className='title-container'>
            <div className='card-title'>{card.title}</div>
            <div className='btn-container'>
              <button className='btn-favorite yellow' ></button> 
            </div>         
          </div>
          <div className='card-body'>{card.body}</div>
        </div>
          </li>
        );
      })}
        </ul>
      </div>
     )
}
}

 
  
