import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cookie from 'js-cookie'
import {connect} from 'react-redux'
import TopHeader from './TopHeader'
import NavBar from './NavBar'

 class Profile extends Component {
     handleLogout = (e) =>{
        e.preventDefault();
         cookie.remove("token")
         this.props.logout();

    }
    render() {
        return (
            <div id="layout-wrapper">
            <TopHeader/>
            <NavBar/>
            <div class="main-content">

                <div class="page-content">
                    <div class="container-fluid">
               
               <h1>profile page</h1> 
               <Link to="/logout" onClick={this.handleLogout}>logout</Link>
            </div>
            </div>
            </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        logout: () => dispatch({type: "SET_LOGOUT"})
    }
  }
  
  export default connect(null,mapDispatchToProps)(Profile)