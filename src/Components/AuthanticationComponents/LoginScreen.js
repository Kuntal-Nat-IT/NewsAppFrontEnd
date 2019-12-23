import React from 'react';
import './style.css';
import imagePath from '../imageConstants';
import axios from "axios";

export default class LoginScreen extends React.Component {

    constructor(props) 
    {
        super(props)
        this.state = {
            formData: {},
            errors: {},
            formSubmitted: false,
            loading: false,
            success: false,
            usrname: "",
            psw: ""
        }

        this.handleInputChangeValue = this.handleInputChangeValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this);
    }


    CheckSession()
    {
        axios.get("http://127.0.0.1:8000/checksession/")
        .then(response => { 
            console.log("+++++++++++++", response['data']['loggedin'])
            let res = response['data']['loggedin']
            if(res)
            {
                this.props.history.push('/')
            }
            else
            {
                this.props.history.push('/login')
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    

    componentDidMount()
    {
        this.CheckSession()
        console.log("Login Page is called !!")
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
          .post("http://127.0.0.1:8000/login/", formData)
          .then(response =>
            {
                console.log("Login Done : " + response['data']['success'])

                if(response['data']['success'])
                {  
                    this.props.history.push('/')
                }
                else
                {
                    this.props.history.push('/login')
                }
            }
            )
          .catch(err => console.log(err));
    }

    
    render(){
        return(
            <div className="loginArea">
                <img src={imagePath.LogoImage} alt="logo image" className="logo-image"/>

                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailImage} alt="image"/>
                        </label>
                        <input type="text" name="usrname" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required placeholder="Username"/>
                    </div>
                    <div className="form-control">
                        <label>
                        <img src={imagePath.lockImage} alt="image"/>
                        </label>
                        <input type="password" name="psw" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required placeholder="Password"/>
                        <a><img src={imagePath.qaImage}/></a>
                    </div>
                    <button className="primary-btn">Login</button>
                </form>
                

                <h5>
                    Don’t have an account? <a href="/register"><span className="linkcolor"> Signup Here!</span></a>
                    <br /><br />
                    Forgot Password? <a href="/resetpassword"><span className="linkcolor"> Click Here</span></a>
                </h5>
                
            </div>
        )
    }
}