import React from 'react'
import './login.css'
import Otp from './otp'


class Login extends React.Component{
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
    handleclick=(e)=>{
        e.preventDefault()
        let number=this.state.mobile
        console.log('first',number)
        if(number.length===10){
            console.log('entered')
            this.setState({
                otp:number.slice(6,10),
                otp_page:true
            })
        }
    }
    render(){
        if(this.state.otp_page===false){
            return (
                <div className="outer-element">
                    <div className="logo"></div>
                    <h2 className="header">Welcome back</h2>
                    <div className="text">Please sign in to your account</div>
                    <input className="input-box" type="tel" placeholder="Enter Contact Number" onchange={this.handlechange}></input>
                    <button className="design-button" onClick={this.handleclick}>Sign in with otp</button>
                </div>
            )
        }
        else{
            return (
                <Otp otpvalue={this.state.otp}/>
            )
        }
    }
}
export default Login