import React, { Component } from 'react';
import './App.css';

// import CommentSection from './components/CommentSection/CommentSection'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/Searchbar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/Login/Login'

import styled from "styled-components";


import dummyData from './dummy-data'

const AppStyled = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

class App extends Component {
  constructor() {
    super();

    this.state = {
      dummyData: [],
      filteredData: [],
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
        filteredData: Array.from(dummyData) 
    })

    if (localStorage.getItem('user')) {
      this.setState({
        loggedIn:true
      })
    }
  }

  handleChanges = (e) => {
    this.setState({
        filteredData: this.state.dummyData.filter(d =>
          d.username.includes(e.target.value)
        ),
        [e.target.name]: e.target.value
    })
  }
//     const filteredList = this.state.dummyData.filter((post) => {
//       if (post.username === this.state.search){
//         return true
//       } else {
//         return false
//       }
// }

  // filterPosts = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.search)

  //   const filteredList = this.state.dummyData.filter((post) => {
  //     if (post.username === this.state.search){
  //       return true
  //     } else {
  //       return false
  //     }
      
  //   })

  //   console.log(filteredList)
  //   this.setState({
  //     dummyData: [...filteredList],
  //     search: ''
  //   })
  //   console.log(this.state.dummyData)
  // }

  render() {
    console.log(this.state.dummyData)
    return (
      <AppStyled>

      <ComponentFromWithAuthenticate 
        data={this.state.filteredData} 
        handleChanges={this.handleChanges}
        filterPosts={this.filterPosts}
        loggedIn={this.state.loggedIn}
        authenticateLogin={this.authenticateLogin}
        logout={this.logout}
      />
      </AppStyled>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostsPage)();

export default App;
