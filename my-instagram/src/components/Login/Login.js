import React from 'react'

class Login extends React.Component {
    constructor() {
        super();

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
            <div>
                <h1>Login Page</h1>
                <form>
                    <input name="user" placeholder="user" onChange={this.handleChanges} />
                    <input name="password" placeholder="password" onChange={this.handleChanges} />
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login