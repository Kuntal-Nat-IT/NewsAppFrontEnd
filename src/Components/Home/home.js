import React from 'react'
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



  render() {
    return <h1>Welcome To News</h1>
  }
}
export default home;