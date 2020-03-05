import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginPage from './ComponentContainers/loginPage'
import RegisterPage from './ComponentContainers/registerPage'
import ProfilePage from './ComponentContainers/profilePage'
import HomePage from './ComponentContainers/HomePage'
import NotFound from './ComponentContainers/NotFound'
import Header from './ComponentContainers/Header'
import ChampionPage from './ComponentContainers/championPage'

import { Route, Switch, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allChampions: [],
      user: {
        championlists: [],
        username: '',
        id: 0
      },
      token: ""
    }
  }

  // when the component mounts, if there is a token in local storage it will send a request to users#persist and send the data to handleresp 
  componentDidMount() {
    if (localStorage.getItem("token")) {

      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then(this.handleResp)
    }

    this.fetchLeagueChampData()
  }

  // Takes in a token and sets a localstorage.token to the recived token. then sends us to profile page 
  handleResp = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    }
    else {
      alert(resp.error)
    }
  }

  // Both of these submits take the response and return it to handle response ! 
  handleRegisterSubmit = (userInfo) => {
    return fetch(`http://localhost:4000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(this.handleResp)
  }
  handleLoginSubmit = (userInfo) => {
    return fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(this.handleResp)
  }

  handleCardDelete = (idFromChild) => {
    // console.log("hello!")
    // console.log(idFromChild)
    // let hello = "hello" 

    fetch(`http://localhost:4000/champions`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(idFromChild)
    }).then(this.fetchLeagueChampData())
  }

  handleCardBlurbChange = (champion, blurbChange) => {
    // e.preventDefault()
    // console.log('hello')
    // console.log(blurbChange)
    // console.log(champion)
    let championId = champion.id

    fetch(`http://localhost:4000/champions/${championId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ blurb: blurbChange })
    })
      .then(this.state.allChampions.filter(champion => champion.id === championId ? champion.blurb = blurbChange : console.log('false')))
  }

  fetchLeagueChampData = () => {
    fetch('http://localhost:4000/champions')
      .then(r => r.json())
      .then(r => {
        this.setState({
          allChampions: r
        })
      }
      )
  }

  creatingChampUserAssociation = (champion) => {
    // console.log("user token: ", this.state.token, "champion Id:", champion )

    fetch(`http://localhost:4000/championlists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.state.token}`
      },
      body: JSON.stringify({ champion_id: champion })
    }).then(r => r.json())
    .then(r => {
      this.setState({
        user:{
          championlists: [...this.state.user.championlists, r]}
      })


    }
      // this.setState({
      // user: {
      //   championlists: [...[user: {championlists}], r]
      // }})
    // .then(r => console.log( 'fetchResp ',r))
    )}

  render() {
    // console.log(this.state.user, "APP")
    console.log(this.state)
    // console.log(this.state.user.championlists.forEach(champ => console.log("erfe",champ.champion)))
    return (
      <div className="App">

        <header className="App-header">
          <aside className="sidebar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/champions">Champions</Link>
              </li>

            </ul>

          </aside>
        </header>

        <Switch>
          {/* More specific actions up, general paths down! */}

          <Route path='/Champions'>
            <ChampionPage allChampions={this.state.allChampions} handleCardDelete={(e) => this.handleCardDelete(e)} handleCardBlurbChange={this.handleCardBlurbChange} token={this.state.token} creatingChampUserAssociation={this.creatingChampUserAssociation} />
          </Route>

          <Route path='/login'>
            <LoginPage handleLoginSubmit={(userInfo) => this.handleLoginSubmit(userInfo)} />
          </Route>

          <Route path='/register'>
            <RegisterPage handleRegisterSubmit={(userinfo) => this.handleRegisterSubmit(userinfo)} />
          </Route>

          <Route path='/profile' >
            <ProfilePage allChampions={this.state.allChampions} user={this.state.user} championlists={this.state.user.championlists} token={this.state.token} />
          </Route>v

          <Route exact strict path='/' >
            <HomePage />
          </Route>

          <Route component={NotFound} />

        </Switch>


      </div>
    )
  }

}

export default withRouter(App)

// comment for push 