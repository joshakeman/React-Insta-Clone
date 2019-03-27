import React, { Component } from 'react';
import './App.css';

// import CommentSection from './components/CommentSection/CommentSection'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/Searchbar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/Login/Login'

import dummyData from './dummy-data'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'

// library.add(faInstagram)

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

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
    console.log(this.state.search)

    const filteredList = this.state.dummyData.filter((post) => {
      if (post.username === this.state.search){
        return true
      } else {
        return false
      }
      
    })

    console.log(filteredList)
    this.setState({
      dummyData: [...filteredList],
      search: ''
    })
    console.log(this.state.dummyData)
  }

  render() {
    console.log(this.state.dummyData)
    return (
      <div className="App">

      {/* <Login /> */}

      <ComponentFromWithAuthenticate 
        data={this.state.dummyData} 
        handleChanges={this.handleChanges}
        filterPosts={this.filterPosts}
      />
      
      {/* <PostsPage
      data={this.state.dummyData} 
      handleChanges={this.handleChanges}
      filterPosts={this.filterPosts}
      /> */}
        {/* <div className="container">
          <SearchBar 
          handleChanges = {this.handleChanges}
          filterPosts = {this.filterPosts}
          />
          {/* <PostContainer username={dummyData[0].username}/> */}
          {/* {this.state.dummyData.map((obj, timestamp) => 
            <PostContainer
              key={obj.timestamp}
              // prop_key={index}
              data={obj}
              addLikes={this.addLikes}
              />
          )} */} 
          
        {/* </div> */}
      </div>
    );
  }
}

export default App;
