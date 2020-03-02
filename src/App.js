import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginPage from './ComponentContainers/loginPage'
import RegisterPage from './ComponentContainers/registerPage'
import ProfilePage from './ComponentContainers/profilePage'
import HomePage from './ComponentContainers/HomePage'

import { Route, Switch, Link } from 'react-router-dom'

class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      user: {
        champions: [],
        username: '',
        id: 0
      }
    }
  }

  handleRegisterSubmit = (userinfo) => {
    console.log("register form has been submited")
    fetch("http://localhost:4000/users", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userinfo)
    }).then(res => res.json())
      .then(resp => {
        if (resp.id) {
          // console.log(resp)
          this.setState({
            user: resp
          })
        }
      }
      )
  }






  render() {

    return (
      <div className="App">
        <Switch>
        {/* More specific actions up, general paths down! */}

          <Route path='/login'>
            <LoginPage />
          </Route>

          <Route path='/register'>
            <RegisterPage handleRegisterSubmit={(userinfo) => this.handleRegisterSubmit(userinfo)} />
          </Route>

          <Route path='/profile' >
            <ProfilePage userState={this.state} />
          </Route>

          <Route path= '/' >
            <HomePage />
          </Route>
        
        </Switch>


      </div>
    )
  }



}

export default App;
