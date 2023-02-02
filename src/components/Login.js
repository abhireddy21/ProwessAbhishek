import { useState } from "react";
import './css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChangeEmail = (event) => {
        setEmail(event.target.value);
        console.log(email);
    };

    const handleInputChangePass = (event) => {
        setPassword(event.target.value);
        console.log(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const json = {
            "email": email,
            "password": password
        };
        console.log(json);
    };

    return (
        <div className="main-cnt">
            <div className="main">
                <div className="login-main">
                    <div className="login-head">
                        <h1>Login</h1>
                    </div>
                    <div className="login-details" >
                        <form className="form" onClick={handleSubmit}>
                            <div className="email-cnt">
                                <input className="email" type="text" onChange={handleInputChangeEmail} name="email" placeholder="Enter email" />
                            </div>
                            <div className="pass-cnt">
                                <input className="password" type="password" onChange={handleInputChangePass} name="password" placeholder="Enter password" />

                            </div>
                            <div className="for-cnt">
                                <a href="#" className="forgot">Forgot Password?</a>
                            </div>
                            <div className="btn-cnt">
                                <button class="btn btn-primary">Login</button>
                            </div>
                            <div className="for-cnt">
                                <a href="#" className="forgot">Create Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login