import React, { Component } from 'react';
import './App.css';

import CommentSection from './components/CommentSection/CommentSection'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/Searchbar/SearchBar'

import dummyData from './dummy-data'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'

// library.add(faInstagram)

class App extends Component {
  constructor() {
    super();

    this.state = {
      dummyData: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar />
          <PostContainer username={dummyData[0].username}/>
          {/* {this.state.dummyData.map((obj, index) => {
            <PostContainer
              key={index}
              data={obj}
              />
          })}
           */}
        </div>
    </div>
    );
  }
}

export default App;
