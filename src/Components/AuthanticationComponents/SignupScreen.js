import React from 'react';
import './style.css';
import imagePath from '../imageConstants';
import axios from "axios";


export default class SignupScreen extends React.Component {

    constructor(props) 
    {
        super(props)
        this.state = {
            formData: {},
            errors: {},
            formSubmitted: false,
            loading: false,
            fullname: "",
            usrname: "",
            usrmail: "",
            usrpsw: "",
            usrimage: "",
            usrtrmscond: false,
            usrsubscrption: true
        }

        this.handleInputChangeValue = this.handleInputChangeValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this);
    }


    handleInputChangeValue(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        let { formData } = this.state;
        formData[name] = value;
        this.setState({
            formData: formData
        });
    }

    handleFileChange(event) {
        let name = event.target.name;
        let value = event.target.files[0];

        let { formData } = this.state;
        formData[name] = value;
        this.setState({
            formData: formData
        });
    }

    handleSubmit(e)
    {
        e.preventDefault();
        let formData = new FormData();
        for (let key in this.state.formData) {
            formData.append(key, this.state.formData[key]);
        }

        axios
          .post("http://localhost:8000/register/", formData)
          .then(res => console.log("Coming Response : ", res))
          .catch(err => console.log(err));
    }


    render(){
        const { errors, formSubmitted } = this.state;
        
        return(
            <div className="loginArea">
                <div className="w-100 mb-10">
                    <a href="/login">
                        <img src={imagePath.backImage} alt="arrow image"/>
                    </a>
                </div>
                
                <form className="login-form" onSubmit={this.handleSubmit}>

                    <div className="text-center">
                        <div class="upload-btn-wrapper">
                            <img src={imagePath.userImage} alt="image" className="user-pic"/>
                            <img src={imagePath.cameraImage} alt="image" className="camera-pic"/>
                            <input type="file" name="userimage" onChange={(ev) => this.handleFileChange(ev)} autoComplete="off" required/>
                        </div>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.userIconImage} alt="image"/>
                        </label>
                        <input type="text" defaultValue={this.state.fullname} name="fullname" placeholder="Full Name" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailImage} alt="image"/>
                        </label>
                        <input type="text" defaultValue={this.state.usrname} name="username" placeholder="Username" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailIconImage} alt="image"/>
                        </label>
                        <input type="email" defaultValue={this.state.usrmail} name="email" placeholder="Email Address" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.lockImage} alt="image"/>
                        </label>
                        <input type="password" defaultValue={this.state.usrpsw} name="password" placeholder="Password" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required/>
                    </div>
                    <button className="primary-btn">Create Account</button>
                </form>

                <div className="w-100">
                    <div className="custom-checkbox">
                        <input type="checkbox" name="usrtrmscond" />
                        <label>I agree with Terms & Conditions</label>
                    </div>
                    <div className="custom-checkbox">
                        <input type="checkbox" name="usrsubscrption" />
                        <label>I want to subscribe to WETP News newsletter.</label>
                    </div>
                </div>

                <div className="bottomstyle">
                    <h5>Already have an account? <a href="/login"><span className="linkcolor">Login Here!</span></a></h5>
                </div>
                
            </div>
        )
    }
}