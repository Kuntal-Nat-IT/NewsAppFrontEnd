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
            usrotp: ""
        }

        this.handleInputChangeValue = this.handleInputChangeValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    CheckValidRequest()
    {
        fetch('http://127.0.0.1:8000/check/forget/password/session/').then(response => {
            return (response.json());
          }).then(data => 
            {
              console.log(data['user']);
              let res = data['user']
              
              if(!res)
              {
                this.props.history.push('/login')
              }

            }
          ).catch(error => {
                console.log("Coming from Catch block : ", Promise.reject(Error(error.message)))
          })
    }


    componentDidMount()
    {
        console.log("OTPPPPPPPPPPPP");
        this.CheckValidRequest()
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
        for (let key in this.state.formData) {
            formData.append(key, this.state.formData[key]);
        }

        axios
          .post("http://127.0.0.1:8000/check/OTP/", formData)
          .then(response =>
            {
                if(response['data']['success'])
                {
                    this.props.history.push('/setnewpassword')
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
                <br /><br />

                    <div className="form-control">
                        <label>
                        <img src={imagePath.emailImage} alt="image"/>
                        </label>
                        <input type="text" placeholder="Enter OTP" name="usrotp" onChange={(ev) => this.handleInputChangeValue(ev)} autoComplete="off" required />
                    </div>

                    <br />
                    <button className="primary-btn">Submit</button>
                </form>
                

                <h5>Don’t get OTP? <a href="/resetpassword"><span className="linkcolor"> Click Here!</span></a></h5>
                
            </div>
        )
    }
}