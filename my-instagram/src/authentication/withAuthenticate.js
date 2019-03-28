import React from 'react'
import Login from '../components/Login/Login'
import PostsPage from '../components/PostContainer/PostsPage'

// const withAuthenticate = Component => 
// class extends React.Component {
//     constructor(props) {
//         super()
//     }
//     render() {
//         if (this.props.loggedIn === false) {
//             return <Login login={this.props.login}/>
//         } else {
//       return <Component 
//       {...this.props}
//       />;}
//     }
//   };


// export default withAuthenticate

const withAuthenticate = Login => PostPage => props =>
class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (!this.props.loggedIn) {
            return <Login login={this.props.login}/>
        } else {
      return <PostPage 
      {...this.props}
      />}
    }
  };


export default withAuthenticate