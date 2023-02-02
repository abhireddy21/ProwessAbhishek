import React, { useState } from "react";
import './css/register.css';

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    const handleInputChangeUsername = (event) => {
        setUsername(event.target.value);
        console.log(username);
    };

    const handleInputChangeEmail = (event) => {
        setEmail(event.target.value);
        console.log(email);
    };

    const handleInputChangePass = (event) => {
        setPassword(event.target.value);
        console.log(password);
    };
    const handleInputChangeConPass = (event) => {
        setConPassword(event.target.value);
        console.log(conPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const json = {
            "username": username,
            "email": email,
            "password": password,
            "confirm_password": conPassword
        };
        console.log(json);
    };

    return (
        <div className="signup-main-cnt">
        <div class="main-signup">
        <div class="signup-cnt">
          <div className="form-head"><h1>Registration</h1>
          </div>
          <form onClick={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputText" class="form-label">Username</label>
              <input type="text" class="form-control" onChange={handleInputChangeUsername} name="username" id="exampleInputText1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" onChange={handleInputChangeEmail} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" onChange={handleInputChangePass} name="password" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" onChange={handleInputChangeConPass} name="conPassword" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-outline-primary">Register</button>
          </form>
        </div>
      </div>
      </div>
    );
}
export default Register