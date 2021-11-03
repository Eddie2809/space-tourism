import {Component} from 'react'
import douglasImg from '../assets/crew/image-douglas-hurley.png'
import markImg from '../assets/crew/image-mark-shuttleworth.png' 
import victorImg from '../assets/crew/image-victor-glover.png' 
import anoushehImg from '../assets/crew/image-anousheh-ansari.png' 


let crewMemb = [
    {
        name: 'Douglas Hurley',
        info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        position: 'Commander',
        img: douglasImg
    },
    {
        name: 'Mark Shuttleworth',
        info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        position: 'Mission Specialist ',
        img: markImg
    },
    {
        name: 'Victor Glover',
        info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        position: 'PILOT',
        img: victorImg
    },
    {
        name: 'Anousheh Ansari',
        info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        position: 'Flight Engineer',
        img: anoushehImg
    }
]

class Crew extends Component{
    constructor(props){
        super(props)
        this.state = {
            currCrewMember: 0
        }
    }

    onChangeCrewMember = (newCrewMember) => {
        this.setState({
            currCrewMember: newCrewMember
        })
    }

    render(){
        return(
            <div className="Crew">
                <div className="main">
                    <div className = 'title'><strong>02</strong> meet your crew</div>
                    <div className = 'content'>
                        <div className='crew-memb-pos'>{crewMemb[this.state.currCrewMember].position}</div>
                        <div className='crew-memb-name'>{crewMemb[this.state.currCrewMember].name}</div>
                        <div className='crew-memb-info'>{crewMemb[this.state.currCrewMember].info}</div>
                        <div className='crew-memb-list'>
                            <ul>
                                <li onClick={() => {this.onChangeCrewMember(0)}}></li>
                                <li onClick={() => {this.onChangeCrewMember(1)}}></li>
                                <li onClick={() => {this.onChangeCrewMember(2)}}></li>
                                <li onClick={() => {this.onChangeCrewMember(3)}}></li>
                            </ul>
                        </div>
                    </div>
                    <div className = 'crew-img'>
                        <img src={crewMemb[this.state.currCrewMember].img} alt={crewMemb[this.state.currCrewMember].name}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crew