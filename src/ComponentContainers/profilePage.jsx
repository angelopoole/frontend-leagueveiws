import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class ProfilePage extends Component {

    componentDidMount() {
        if (!this.props.token) {
            this.props.history.push("/login")
        }

    }


    render() {
        // let {user: {champions, username}} = this.props
        let { user: { champions, username, id } } = this.props
        console.log(this.props)
        return (
            <div>
                <h1> This is the profile page!, Welcome {username}</h1>
                <h1> Fav champs {champions} </h1>
            </div>
        )
    }


}
export default withRouter(ProfilePage);