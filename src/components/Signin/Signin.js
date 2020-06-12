import React from 'react'
import './signin.css'
class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            signinEmail:"",
            signinPassword:""
        }
    }

    onEmailChange=(event)=>{
        this.setState({signinEmail:event.target.value})
    }
    onPasswordChange=(event)=>{
        this.setState({signinPassword:event.target.value})
    }

    onSubmitSignin=()=>{
       /*  console.log(this.state.signinEmail,this.state.signinPassword) */
        if(!this.state.signinEmail || !this.state.signinPassword){
            alert("Email or Password can't be empty")
        }else{ 
           fetch("https://fathomless-headland-36250.herokuapp.com/signin",{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:this.state.signinEmail,
                password:this.state.signinPassword
            })
        })
        .then(Response =>Response.json())
        .then( data=>{ 
        if(data.id){ 
            this.props.loadUser(data)
        this.props.onRouteChange('home')
        }
    
    })
}
    }    
    render(){ 
        const {onRouteChange}=this.props
    return (
        <div>
            <div className='cardbody b'>
            <div className='f1 b'>Sign In</div>
            <label  >Email</label><br/>
            <input onChange={this.onEmailChange} className='signinput' type='tex'/>
            <hr/>
            <label  >Password</label><br/>
            <input onChange={this.onPasswordChange} className='signinput' type='password'/>
            <hr/>
            <button onClick={this.onSubmitSignin} className='btn grow pointer'>Sign in</button><br/>
            <hr/>
            <button onClick={()=>onRouteChange('Register')} className='f6 pointer dib' >Register</button>
        </div>
        </div>
    )
    }
}


export default Signin
