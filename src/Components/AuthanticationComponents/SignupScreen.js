import React from 'react';
import './style.css';
import imagePath from '../imageConstants';

export default class SignupScreen extends React.Component {
    render(){
        return(
            <div className="loginArea">
                <div className="w-100 mb-10">
                    <a><img src={imagePath.backImage} alt="arrow image"/></a>
                </div>
                
                
                <form className="login-form">
                    <div className="text-center">
                        <div class="upload-btn-wrapper">
                            <img src={imagePath.userImage} alt="image" className="user-pic"/>
                            <img src={imagePath.cameraImage} alt="image" className="camera-pic"/>
                            <input type="file" name="myfile" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.userIconImage} alt="image"/>
                        </label>
                        <input type="text" placeholder="Full Name"/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailImage} alt="image"/>
                        </label>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailIconImage} alt="image"/>
                        </label>
                        <input type="text" placeholder="Email Address"/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.lockImage} alt="image"/>
                        </label>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button className="primary-btn">Create Account</button>
                </form>
                <div className="w-100">
                    <div className="custom-checkbox">
                        <input type="checkbox"/>
                        <label>I agree with Terms & Conditions</label>
                    </div>
                    <div className="custom-checkbox">
                        <input type="checkbox"/>
                        <label>I want to subscribe to WETP News newsletter.</label>
                    </div>
                </div>
            </div>
        )
    }
}