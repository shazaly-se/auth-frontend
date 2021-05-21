import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'
import cookie from 'js-cookie'
import axios from 'axios'
import jwt from 'jsonwebtoken'

const jwt_secret = "caWQPg0AoCCvNektjJnkndh7X1bqcNLvfZunazvzIu3WCfJ0SUXMagmRWzrXj8z5";
let token = cookie.get("token");
if(token)
{
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if(err){
      token=null;
      cookie.remove("token")
    }else{
      if(decoded.iss !== "http://backend.shazaly.com/api/auth/login"){
        token=null;
        cookie.remove("token")
      }
    }
    //console.log(decoded)
  });
  
}
const render = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if(token)
{
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.post("http://backend.shazaly.com/api/auth/me")
.then(res =>{
  store.dispatch({type:"SET_LOGIN",payload:res.data});
  render();
});


}else{
  render();
}






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
