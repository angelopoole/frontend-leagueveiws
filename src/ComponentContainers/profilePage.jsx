import React, { Component } from 'react'
import ChampionCard from '../Components/championCard'
import { withRouter } from 'react-router-dom'

class ProfilePage extends Component {



    componentDidMount() {
        if (!this.props.token) {
            this.props.history.push("/login")
        }
    }

    renderChampionCards = () => {
        // if (!this.props.user.championlists) {
        //     return
        // } else {
        //     // console.log(this.props.user.championlists)

        //     // this works but can be improved
        //     // let champions = this.props.allChampions
        //     // let favoriteChampions = this.props.user.championlists
        //     // let favIds = favoriteChampions.map(fav => fav.champion_id) 
        //     // let filtered = champions.filter(champion => favIds.includes(champion.id) ? champion: console.log(false))
        //     // return filtered.map(champion => {
        //     //     return <ChampionCard
        //     //     champion={champion}
        //     //     key={champion.key}
        //     //     />
        //     // })
            
        //     let userChampions = this.props.championlists
        //     console.log(userChampions)
        //     // console.log(userChampions.forEach(e => e.champion))
        //     userChampions.map(element => {
        //         // console.log(element.champion)
        //         let champ =  element.champion
        //         return <ChampionCard
        //             champion={champ}
        //         />
        //     })
            // return userChampions

            // return champions.map(champion => {
            //     let fav = favChampions.forEach(element => {
            //         champions.forEach(cham => {
            //             if (element.id === cham.id) { 
            //                 console.log(cham)
            //             }
            //         }
            //         )
            //     })
            //     return fav
            //     // console.log(fav)
            //     // console.log(fav)
            //     // return <ChampionCard
            //     // champion={fav}
            //     // />
            // })


            // championLists.map(champion =>  this.filterThem(champion.id) )
            // console.log(favoritechampionids)

            // let filterThese = allChamps.filter(champion => champion.id === favoritechampionids)

            // console.log(filterThese)

            // ****************************
            // let filtered = championLists.filter(favChamp => {
            //     let favoritechamp = favChamp.champion_id
            //     let mapped = allChamps.map(champ => {
            //         if (champ.id === favoritechamp) {
            //             return champ 
            //         }
            //     })
            //     return mapped
            // })
            // return console.log(filtered)
            // **********************
            // console.log(filtered)
            // .map(champion => {
            //     console.log(champion)
            //     return <ChampionCard
            //         champion={champion}
            //     />
            // })

            // ************************

            // console.log(filteredChamps)

            // let v = allChamps.filter(allchamp => championLists.map() )
            // .map(response => console.log("works", response))

            // console.log('v' , v)
            // ******************************

            // let filteredChamps = allChamps.filter(champion => {
            //     return championLists.filter(console.log)
            //     // console.log('allchampid' , champion.id, championLists.filter(champid => console.log('champid', champid.champion_id)))
            // })
            // console.log(filteredChamps)
            // filteredChamps

            // return championLists.map(champion => {
            //     // console.log(allChamps)
            //     let filteredChamps = allChamps.filter(allchampioninstance => {
            //         if (allchampioninstance.id === champion.champion_id) {
            //             return <ChampionCard
            //                 champion={allchampioninstance}
            //                 key={champion.id}
            //             />
            //         }
            //     })


            // return filteredChamps
            // console.log('filteredChamps', filteredChamps)
            // console.log(filteredChamps)
            // let trueChamp = filteredChamps
            // console.log('champchamp', trueChamp)

            // })
            // console.log(championlists)

            console.log(this.props.user.championlists)

        // }

    }

    // filterThem = (favchampionId) => {
    //     let allChamps = this.props.allChampions
    //     let all = allChamps.map(champ => champ.id === favchampionId)
    //     console.log(all)
    // }

    render() {
        // console.log(this.filterThem())

        // console.log(this.props?.championlists?.forEach(champion => console.log(champion.champion)))


        // console.log("this.props.user.championlists:",this.props.user.championlists)


        // let {user: {champions, username}} = this.props
        let { user: { champions, username, id } } = this.props
        // console.log(username)
        // console.log("this.props.user:",this.props.user)
        // console.log(this.props.user.championlists)
        
        let championMapper = this.props.user.championlists.map(champion => {
            return <ChampionCard
                    champion={champion.champion}
                />
        })
        
        return (
            <div>
                <h1> This is the profile page!, Welcome {username}</h1>
                {/* <h1> Fav champs {this.renderChampionCards()} </h1> */}
                {championMapper}
            </div>
        )
    }


}
export default withRouter(ProfilePage);