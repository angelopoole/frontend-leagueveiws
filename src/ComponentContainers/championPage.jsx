// This will be the page that displays All champions!
//fetch from datadragon!  ex: fetch('http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/champion.json') or fetch('http://ddragon.leagueoflegends.com/cdn/${Version Number}/data/en_US/champion.json')
// fetch('http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json').then(r => r.json()).then(r => console.log('response:', r , 'data:', r.data.Aatrox)) <-- to see data

import React, { Component } from 'react'
import ChampionCard from '../Components/championCard'
import { withRouter } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

class championPage extends Component {

    componentDidMount() {
        if (!this.props.token) {
            this.props.history.push("/login")
        }

    }

    renderChampionCards = () => {
        let champions = this.props.allChampions
        return champions.map(champion => {
            return <ChampionCard
                champion={champion}
                key={champion.id}
                handleCardDelete={this.props.handleCardDelete}
                handleCardBlurbChange={this.props.handleCardBlurbChange}
                creatingChampUserAssociation={this.props.creatingChampUserAssociation}
            />
        })
    }

    render() {
        console.log(this.props)
        return (
            <div style={{overflow: 'scroll', height: '65rem', overflowX: 'hidden'}} >
                <Card.Group >
                    {this.renderChampionCards()}
                </Card.Group>
            </div>
        )
    }
}
export default withRouter(championPage);