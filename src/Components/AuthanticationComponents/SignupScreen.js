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
                        <img src={imagePath.emailImage} alt="image"/>
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
                        <img src={imagePath.lockImage} alt="image"/>
                        </label>
                        <input type="text" placeholder="Username"/>
                        <a><img src={imagePath.qaImage}/></a>
                    </div>
                    <button className="primary-btn">Login</button>
                </form>
                <h5>Don’t have an account?<a>Sign up here!</a></h5>
            </div>
        )
    }
}