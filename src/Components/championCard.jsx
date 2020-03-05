import React from 'react'

export default class ChampionCard extends React.Component {


    // string interpolate http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/${image} 


    constructor(props) {
        super(props)

        this.state = {
            blurb: this.props.champion.blurb,
            submit: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.blurb)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleCardBlurbChange(this.props.champion, this.state.blurb)
    }

    addToUser = (characterId) => {
        console.log('here')
        this.props.creatingChampUserAssociation(characterId)
       
        
    }


    render() {

        // console.log(this.props.champion[0])
        // console.log(this.props)

        let { champion } = this.props
        let {id, name, title, blurb } = champion
        // console.log(this.props.champion[0])
        // console.log(this.props)
        return (
            <div className='ChampionCard' >
                <button onClick={(e) => this.props.handleCardDelete(this.props.champion)} > X </button>
                <button onClick={(e) => this.addToUser(id)}> ">" </button>
                <form onSubmit={(e) => this.handleSubmit(e)} >

                <p> {name} </p>
                <p> {title} </p>


                    <textarea name="blurb" onChange={(e) => this.handleChange(e)} value={this.state.blurb}  ></textarea>
                    <input type='submit' style={{ background: 'black', float: "bottom", width: '200px' }} />

                </form>
                <div> =========== </div>
            </div>
        )
    }







}