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

    fetchFromApi = (e) => {
        e.preventDefault()
        let query = this.state.searchSummoners

        fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${query}`, {
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": `${process.env.REACT_APP_LEAGUE_API_KEY}`,
                "Accept-Language": "en-US,en;q=0.9",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36"
            } 
        }).then(r => r.json())
        .then(console.log)
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


        return (
            <div>
                <h1> This is the profile page!, Welcome {username}</h1>
                <div className="MainProfileBody">
                    <h1> main profile body </h1>
                    <form onSubmit={(e) => this.fetchFromApi(e)}  >
                        <input style={{ backgroundColor: "grey", float: "left", width: "50rem" }} name="searchSummoners" value={this.state.searchSummoners} onChange={(e) => this.handleChange(e)} />
                        <input style={{ backgroundColor: "grey" }} type="submit" />
                    </form>
                </div>
                <div className='sideBar'>
                    <Card.Group itemsPerRow={2}>{championMapper}</Card.Group>
                </div>
            </div>

        )
    }


}
export default withRouter(ProfilePage);