import React, { Component } from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import { connect } from 'react-redux';
import Error from './Error'
import { Link } from 'react-router-dom';
 class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            email:'',
            password: '',
            errors:{}
        }
    }

    handleInput = (e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})

    }
    handleForm = (e) =>{
        e.preventDefault();
        const data = {email:this.state.email,password:this.state.password}
        axios.post("http://backend.shazaly.com/api/auth/login",data)
        .then(res => {   
             cookie.set("token",res.data.access_token);
        this.props.setLogin(res.data.user)
        this.props.history.push('/profiles')})
        .catch(e =>this.setState({errors:"error"}))
    }
    render() {
       // const error= this.state.errors
        return (
        <div>
              <div class="home-btn d-none d-sm-block">
        </div>
        <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-soft-primary">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <p>Sign in </p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="" alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div>
                                    <Link to="/login">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            
                                        </div>
                                    </Link>
                                </div>
                                <div class="p-2">
                                  
        
                                        <div class="form-group">
                                            <label for="username">Username</label>
                                            <input type="email" name="email" onChange={this.handleInput} class="form-control" id="username" placeholder="Enter username" />
                                            <Error error={this.state.errors["email"]?this.state.errors["email"]:null }/>
                                        </div>
                
                                        <div class="form-group">
                                            <label for="userpassword">Password</label>
                                            <input type="password" name="password" onChange={this.handleInput} class="form-control" id="userpassword" placeholder="Enter password" />
                                            <Error error={this.state.errors["password"]?this.state.errors["password"]:null }/>
                                        </div>
                
                                        
                                        
                                        <div class="mt-3">
                                            <button class="btn btn-primary btn-block waves-effect waves-light" onClick={this.handleForm.bind(this)}>Log In</button>
                                        </div>
            
                                       

                                        
                                        
                                    
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
  return {
      setLogin: (user) => dispatch({type: "SET_LOGIN",payload:user})
  }
}

export default connect(null,mapDispatchToProps)(Login)