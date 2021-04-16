import React, { Component } from 'react';
import { logout, isLogin } from '../../Routes/Auth';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
        this.props.history.push('/SignIn');
    }


    render() {
        return (
            <>
                <h1>Welcome Dashboard</h1>
                {this.state.isLogin ?
                    <button onClick={() => this.handleLogout()}>Click here to log out</button>
                    : <Link to="/signin">Go to sign in page</Link>
                }
            </>
        )
    }
}


export default Home;