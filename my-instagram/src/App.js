import React, { Component } from 'react';
import './App.css';

// import CommentSection from './components/CommentSection/CommentSection'
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
      dummyData: [],
      search: ''
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  handleChanges = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  filterPosts = (event) => {
    event.preventDefault();

    const filteredList = dummyData.filter((post) => {
      console.log(post.username)
      return post.username === this.state.search
    })

    console.log(filteredList)

    this.setState({
      dummyData: filteredList
    })
    console.log(dummyData)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar 
          handleChanges = {this.handleChanges}
          filterPosts = {this.filterPosts}
          />
          {/* <PostContainer username={dummyData[0].username}/> */}
          {this.state.dummyData.map((obj, index) => 
            <PostContainer
              key={index}
              prop_key={index}
              data={obj}
              addLikes={this.addLikes}
              />
          )}
          
        </div>
    </div>
    );
  }
}

export default App;
