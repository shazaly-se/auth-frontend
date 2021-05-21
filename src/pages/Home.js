import React, { Component } from 'react'
import {Redirect, withRouter} from 'react-router-dom';
import axios from "axios"
import cookie from 'js-cookie'
 class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            users:[],
           
        }
    }

    componentDidMount()
    {
        const token = cookie.get("token");
        console.log(token)

        axios.get("http://backend.shazaly.com/api/users",{ headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {  
            this.setState({users:res.data.users})
        })
    }

    handleLogout = (e) =>{
        e.preventDefault();
        cookie.remove("token");
        window.location.href = '/';
        //this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                       <button class="btn btn-primary btn-block waves-effect waves-light"  onClick={e=>this.handleLogout(e)}>Log Out</button>
                                       
                <h1>Users</h1> 
                <div className="row">
                    {this.state.users.map(user =>
                          <div className="col-md-4">
                          <div class="card" >
                              
                              <div class="card-body">
                                  <h5 class="card-title">{user.name}</h5>
                                  <p class="card-text">{user.email}</p>
                                  
                              </div>
                              </div>
                          </div>

                    )}
                          
                   
                </div>
               
            </div>
        )
    }
}

export default withRouter(Home);
