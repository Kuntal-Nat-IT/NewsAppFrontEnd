import React from 'react';
import './style.css';
import imagePath from '../imageConstants';
// import axios from "axios";
const axios = require('axios');


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
            usrtrmscond: 'off',
            usrsubscrption: true,
            alreadylogedin: false,
            imgchaeck: false,
            noerror: false,
            usrchooseimgpath: ''
        }

        this.handleInputChangeValue = this.handleInputChangeValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleInputChangetermscond = this.handleInputChangetermscond.bind(this);
    }


    async componentDidMount()
    {
        try 
        {
          const response = await fetch('http://localhost:8000/checksession/');
          const json = await response.json();
          if(json['loggedin'])
          {
            this.setState({alreadylogedin : true})
            this.props.history.push('/')
          }
          
        }
        catch (error) 
        {
          console.error(error);
        }
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

        this.setState({usrchooseimgpath : URL.createObjectURL(event.target.files[0])})
        this.setState({usrimage : value})
        this.setState({imgchaeck : true})
    }


    handleInputChangetermscond(event)
    {
        let name = event.target.name;
        let value = event.target.value;
        
        if(value == 'on')
        {
            this.setState({noerror : true})
        }
    }

    handleSubmit(e)
    {
        e.preventDefault();
        let formData = new FormData();
        for (let key in this.state.formData) {
            formData.append(key, this.state.formData[key]);
        }

        if(this.state.noerror)
        {
            axios
          .post("http://localhost:8000/register/", formData)
          .then(res =>
            this.props.history.push('/login')
            )
          .catch(err => console.log(err));
        }
        else
        {
            alert("Please Agree Terms & Condition !!");
        }
    }


    render(){
        const { errors, formSubmitted } = this.state;

        const flag = this.state.imgchaeck;
        let path = '';

        if(flag)
        {   
            path = <img src={this.state.usrchooseimgpath} alt="image" className="user-pic"/>;
        }
        else
        {
            path = <img src={imagePath.userImage} alt="image" className="user-pic"/>;
        }
        
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
                            {/* <img src={imagePath.userImage} alt="image" className="user-pic"/> */}
                            {path}
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
                        <input type="checkbox" name="usrtrmscond" onChange={(ev) => this.handleInputChangetermscond(ev)} />
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