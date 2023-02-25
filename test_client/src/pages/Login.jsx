import React, { Component } from "react";
import "./index.css";
import CustomInput from "../components/CustomInput";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import AuthService from "../services/auth.service";


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        id = this.state.username
        password = this.state.password

        AuthService.login(this.state.username, this.state.password).then(
            () => {

                if (res.status == "201") {
                    console.log('Hi')
                    this.props.router.navigate(['/home']).then(() => {
                        window.location.reload();
                    });
          
                  } else if (res.status == '401') {
                    this.setState({
                       message: 'Wrong Password'
                    });
                } else {
                    this.setState({
                       message: 'Invalid User!'
                    });
                }
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }


login = () => {
    navigate('/home');
}

render() {
    return (
        <div className="Login">
            <img className="logo" src="/src/assets/dbslogo.png" />
            <form className="form">
                <h1>MyInsurance @ DBS</h1>
                <h2 className="login">Login</h2>

                <TextField
                    className="login-box"
                    id="outlined-password-input"
                    label="Employee ID"
                    variant="standard"
                    autoComplete="current-password"
                    onChange={this.onChangeUsername}
                />
                <TextField
                    className="login-box"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="standard"
                    autoComplete="current-password"
                    onChange={this.onChangePassword}
                />

                <Button variant="contained" className="form__custom-button" onClick={this.login}>
                    Log in
                </Button>
            </form>
        </div>
    );
}
}



export default Login
