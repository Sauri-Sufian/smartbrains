import React from 'react'
class Register extends React.Component{
    constructor(props){
        super();
        this.state={
            signInEmail:"",
            signInPassword:"",
            signInName:""
        }
    }

    onEmailChange=(event)=>{
        this.setState({signInEmail:event.target.value})
    }

    onPasswordChange=(event)=>{
        this.setState({signInPassword:event.target.value})
    }

    onNameChange=(event)=>{
        this.setState({signInName:event.target.value})
    }

    onRegister=()=>{
        if(!this.state.signInEmail || !this.state.signInName || !this.state.signInPassword){
            alert("Credentials can't be empty")
        }
        else{ 
        fetch("https://fathomless-headland-36250.herokuapp.com/register",{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword,
                name:this.state.signInName
            })
        })
        .then(Response =>Response.json())
        .then( user=>{ 
            if(user){
                
                this.props.loadUser(user)
            this.props.onRouteChange('home')
            }
        })
    }
    }


    render(){ 
    return (
        <div>
            <div className='cardbody pa1 b'>
            <div className='f2 '>Register</div>
            <label  >Name</label><br/>
            <input onChange={this.onNameChange} className='signinput' type='text'/>
            <hr/>
            <label  >Email</label><br/>
            <input onChange={this.onEmailChange} className='signinput' type='email'/>
            <hr/>
            <label  >Password</label><br/>
            <input onChange={this.onPasswordChange} className='signinput' type='password'/>
            <hr/>
            <button  onClick={this.onRegister}  className='btn pointer'>Register</button><br/>
            <hr/>
            
        </div>
        </div>
    )
 }
}


export default Register
