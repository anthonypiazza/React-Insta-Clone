import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleLogin = e => {
        const username = this.state.username;
        localStorage.setItem('username', username);
        window.location.reload();
    };
    render(){
        return(
            <form>
                <input
                placeholder="Username"
                onChange={this.handleChange}
                type='text'
                value={this.state.username}
                name='username'
                />
                <input
                placeholder="Password"
                onChange={this.handleChange}
                type='text'
                value={this.state.password}
                name='password'
                />
                <button onClick={this.handleLogin}>Login</button>
            </form>
        )
    }
}

export default Login;