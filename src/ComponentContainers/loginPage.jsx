import React from 'react'
// import anime from 'animejs'// import React, { Component } from 'react'
import Form from '../Components/Form.jsx'

export default class LoginPage extends React.Component {

handleLoginSubmit= userinfo => {
    console.log("login form has been submited")

    // fetch("http://localhost:4000/users", {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json'
    //     }, 
    //     body: JSON.stringify(userinfo) 
    // })
}



    render() {

        return (
            <div className="page">
                <Form handleLoginSubmit={this.props.handleLoginSubmit} login={true} />
            </div>
        )
    }

}