import React, { Component } from 'react'
import ChampionCard from '../Components/championCard'
import { withRouter } from 'react-router-dom'
import '../profilePage.css'
import { Button, Card, Image } from 'semantic-ui-react'

class ProfilePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchSummoners: ''
        }
    }



    componentDidMount() {
        if (!this.props.token) {
            this.props.history.push("/login")
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.searchSummoners)
    }




    render() {

        let { user: { username, id } } = this.props

        let championMapper = this.props.user.championlists.map(champion => {
            return <ChampionCard
                champion={champion.champion}
                key={champion.id}
                className="championCard"
            />
        })

        let innerButton = <button />

        return (
            <div>
                <h1> This is the profile page!, Welcome {username}</h1>
                <div className="MainProfileBody">
                    <h1> main profile body </h1>
                    <input style={{ backgroundColor: "grey", float: "left", width: "50rem" }} name="searchSummoners" value={this.state.searchSummoners} onChange={(e) => this.handleChange(e)} />
                    <input type="submit"/>
                </div>
                <div className='sideBar'>
                    <Card.Group itemsPerRow={2}>{championMapper}</Card.Group>
                </div>
            </div>
            
        )
    }


}
export default withRouter(ProfilePage);