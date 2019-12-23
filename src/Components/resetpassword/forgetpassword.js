import React from 'react';
import './style.css';
import imagePath from '../imageConstants';
const axios = require('axios');

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
            usrname: ""
        }

        this.handleInputChangeValue = this.handleInputChangeValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    componentDidMount()
    {
        console.log("YYYYYYYYYY");
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


    handleSubmit(e)
    {
        e.preventDefault();
        let formData = new FormData();
        for (let key in this.state.formData) 
        {
            formData.append(key, this.state.formData[key]);
        }

        axios
          .post("http://127.0.0.1:8000/forgot-password/", formData)
          .then(response =>
            {
                console.log("Coming Response : ", response['data']['success'])
                if(response['data']['success'])
                {
                    this.props.history.push('/reset/password/otp')
                }
                else
                {
                    alert("Username or Email is not vaild !!")
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
                    <br /><br />
                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailImage} alt="image"/>
                        </label>
                        <input type="text" placeholder="Username or Email" name="usrname" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required />
                    </div>
                    <br />
                    <button className="primary-btn">Submit</button>
                </form>
                

                <h5>Don’t have an account? <a href="/register"><span className="linkcolor"> Signup Here!</span></a></h5>
                
            </div>
        )
    }
}