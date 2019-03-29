import React from 'react'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            user: '',
            password: ''
        }
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        localStorage.setItem('user', this.state.user)
        localStorage.setItem('password', this.state.password)
    }
    

    render() {
        return(
            <div className="login-wrapper">
                <h1>Login Page</h1>
                <form onSubmit={this.props.authenticateLogin} className="login-form"> 
                    <input name="user" placeholder="user" onChange={this.handleChanges} className="user-input" />
                    <input name="password" placeholder="password" onChange={this.handleChanges} className="password-input" />
                    <button onClick={this.login} className="login-button">Login</button>
                </form>
            </div>
        )
    }
}

export default Login