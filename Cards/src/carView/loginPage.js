import React from "react";
import { TextField, Button } from '@mui/material';
import { AccountCircle, Lock } from "@mui/icons-material";
import Welcome from "./arrows/welcome_02.png";
import "./loginPage.css";

import CardView from "./card";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    errors: {
      username: "",
      password: "",
    },
    redirectNextPage: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    let isValid = true;
    const errors = {};

    if (!username || !username.includes("@")) {
      errors.username = "Please enter a valid email address.";
      isValid = false;
    }

    if (!password) {
      errors.password = "Please enter a password.";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSumbit = (event) => {
    event.preventDefault();
   
    if (this.validateForm()) {
      const { username, password } = this.state;
      if (username === "raja34@gmail.com" && password === "RR$$ss") {
       
        this.setState({ redirectNextPage: true });
      } else {
       
       this.setState({ loginError: true }); 
      }
    }
  }

  render() {
    const { username, password, errors, redirectNextPage,loginError} = this.state;

    if (redirectNextPage) {
      return <CardView/>;
    }

    return (
      <div className="fullPage">
        <div className="loginPage">
          <div className="desginDiv">
            <img src={Welcome} alt="Not Visible" id="welcomeImg" />
          </div>

          <div className="LoginDiv">
            <h2>SIGN IN</h2>

            <label className="newLab">Username</label>
            <TextField
              id="standard-basic"
              InputProps={{
                endAdornment: <AccountCircle />,
              }}
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
                 variant="standard"
                           error={Boolean(errors.username || loginError)} 
              helperText={errors.username || (loginError && "Incorrect username.")} 
            />

            <label className="newLab">Password</label>
            <TextField
              id="standard-basic"
              variant="standard"
              type="password"
              InputProps={{
                endAdornment: <Lock />,
              }}
              name="password"
              value={password}
              onChange={this.handleInputChange}
              error={Boolean(errors.password || loginError)} 
              helperText={errors.password || (loginError && "Incorrect password.")} 
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="log"
              onClick={this.handleSumbit}
            >
              SIGN IN
            </Button>

            <div className="newSign">
              <p>If you have an account?</p>
            
                <p id="singin">SIGN UP</p>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
