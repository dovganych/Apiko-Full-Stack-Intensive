import React, { Component } from 'react';
import './App.css';
import data from './data.js'

class App extends Component {
  constructor() {
    super();
    this.state = { countOfPosts: 10 };
    this.addPosts = this.addPosts.bind(this);
  }

  addPosts(){
    if (this.state.countOfPosts < 100){
      this.setState({
        countOfPosts: this.state.countOfPosts + 10
      });
    }
  }

  render() {
    return (
      <div className = "App">
        <PostList countOfPosts ={ this.state.countOfPosts }/>
        <MoreButton addPosts = { this.addPosts }/>
      </div>
    );
  }
}

const PostList = props => (
  <div>
    <h3 className="App-title">Posts ({props.countOfPosts})</h3>
    <ul>
      {data.slice(0,props.countOfPosts).map((item) => {
        return (
          <PostListItem key={item.id} title={item.title} /> 
        );
      })}
    </ul>  
  </div>
);

const PostListItem = props => (
  <li>{props.title}</li>
);

const MoreButton = props => (
  <button className="App-intro" onClick={props.addPosts}>More</button>
);

export default App;