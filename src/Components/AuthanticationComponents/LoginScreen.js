import React from 'react';
import './style.css';
import imagePath from '../imageConstants';

export default class LoginScreen extends React.Component {
    render(){
        return(
            <div className="loginArea">
                <img src={imagePath.LogoImage} alt="logo image" className="logo-image"/>
                <form className="login-form">
                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailImage} alt="image"/>
                        </label>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.lockImage} alt="image"/>
                        </label>
                        <input type="password" placeholder="Password"/>
                        <a><img src={imagePath.qaImage}/></a>
                    </div>
                    <button className="primary-btn">Login</button>
                </form>
                <h5>Don’t have an account?<a>Sign up here!</a></h5>
            </div>
        )
    }
}