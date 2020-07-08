import React from 'react';

let Favorites=(props)=>{
  
     return (
      <div >
        <ul>
        {props.favorites.map(i=>
          <li key={props.favorites[i]}>{i}</li>
          )}
        </ul>
      </div>
     )
}
     
export default Favorites;


 
  
