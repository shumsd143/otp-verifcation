import React from 'react'
import './login.css'


class Otp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mobile:'',
            otp:1111,
            otp_page:false
        }
    }
    handlechange=(event)=>{
        this.setState({
            mobile:event.target.value
        })
    }
    render(){
            return (
                <div className="outer-element">
                    <div className="logo"></div>
                    <h2 className="header">Please verify Phone number</h2>
                    <input className="input-box" type="Number" placeholder="Enter Contact Number" onchange={this.handlechange}></input>
                    <button className="design-button">Sign in with otp</button>
                </div>
            )
    }
}
export default Otp