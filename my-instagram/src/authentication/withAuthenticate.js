import React from 'react'
import Login from '../components/Login/Login'

const withAuthenticate = Component => 
class extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        if (this.props.loggedIn === false) {
            return <Login login={this.props.login}/>
        } else {
      return <Component 
      {...this.props}
      />;}
    }
  };


export default withAuthenticate