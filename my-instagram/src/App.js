import React, { Component } from 'react';
import './App.css';

// import CommentSection from './components/CommentSection/CommentSection'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/Searchbar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/Login/Login'

import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super();

    this.state = {
      dummyData: [],
      search: '',
      loggedIn: false
    }
  }

  authenticateLogin = () => {
    this.setState({
      loggedIn: true,
    })
  }

  logout = () => {
    console.log('logout is firing!')
      localStorage.clear()
      
      this.setState({
        loggedIn: false
      })
  }

  componentDidMount() {
    this.setState({
        dummyData: dummyData,  
    })

    if (localStorage.getItem('user')) {
      this.setState({
        loggedIn:true
      })
    }
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

      <ComponentFromWithAuthenticate 
        data={this.state.dummyData} 
        handleChanges={this.handleChanges}
        filterPosts={this.filterPosts}
        loggedIn={this.state.loggedIn}
        authenticateLogin={this.authenticateLogin}
        logout={this.logout}
      />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostsPage);

export default App;
