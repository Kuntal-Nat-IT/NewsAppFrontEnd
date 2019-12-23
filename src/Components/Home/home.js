import React from 'react';
import axios from "axios";

class home extends React.Component {
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
            psw: "",
            alreadylogedin: false
        }
    }

    CheckSession()
    {
        axios.get("http://127.0.0.1:8000/checksession/", 
        {
            // withCredentials: true,
            'Access-Control-Allow-Credentials': true
        }
        )
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
    }


  render() {
    return <h1>Welcome To News</h1>
  }
}
export default home;