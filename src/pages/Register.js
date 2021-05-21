import React, { Component } from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
export default class Register extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            name:'',
            email:'',
            password: '',
            password_confirmation: '',
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
        const data = {name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation}
        axios.post("http://localhost:8000/api/auth/register",data)
        .then(res =>{
            cookie.set('token',res.data.access_token);
            cookie.set('user',res.data.user);
            this.props.history.push('/profile')
        })
        .catch(e =>this.setState({errors:e.response.data}))
        //this.props.history.push('/profile')
    }
    render() {
        const error= this.state.errors
        return (
            <div className="container">
                <h1>Sign Up</h1>
        {error.errors ? <p className="text-red">{error.errors}</p> :("")}
                <form onSubmit={this.handleForm}>
                <div class="form-group">
    <label for="exampleInputEmail1">Name </label>
    <input type="text" name="name" onChange={this.handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" onChange={this.handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" onChange={this.handleInput} class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password_confirmation" onChange={this.handleInput} class="form-control" id="exampleInputPassword1" />
  </div>

  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
            </div>
        )
    }
}
