import React from 'react';
import "./App.css";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      items: []
    }
  }


  async componentDidMount(){
    const url =  (`https://jsonplaceholder.typicode.com/posts`);
    const response = await fetch(url);
    const data = await response.json();
    this.setState({items:data})
  }

  render(){
    return (
      <div>
        <ul>
        {this.state.items.map(item=>(
          <li key={item.id}>
            <div className='card'>
              <div className='title-container'>
                <div className='card-title'>{item.title}</div>
                <div className='btn-favorite'></div>
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
  
