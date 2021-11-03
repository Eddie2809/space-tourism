import {Component} from 'react'
import MoonImg from '../assets/destination/image-moon.png'
import MarsImg from '../assets/destination/image-mars.png'
import EuropaImg from '../assets/destination/image-europa.png'
import TitanImg from '../assets/destination/image-titan.png'

let dests = [
    {
        name: 'moon',
        text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        avgDist: '384,400 km',
        travTime: '3 days',
        img: MoonImg
    },
    {
        name: 'mars',
        text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        avgDist: '225 MIL. km',
        travTime: '9 months',
        img: MarsImg
    },
    {
        name: 'europa',
        text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        avgDist: '628 MIL. km',
        travTime: '3 years',
        img: EuropaImg
    },
    {
        name: 'titan',
        text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        avgDist: '1.6 BIL. km',
        travTime: '7 years',
        img: TitanImg
    }
]

class Destination extends Component{
    constructor(props){
        super(props)
        this.state = {
            currDest: 0
        }
    }

    onChangeDestination = (newDest) => {
        this.setState({
            currDest: newDest
        })
    }

    render(){
        return(
            <div className="Destination">
                <div className='content'>
                    <div className="dest-title"><strong>01</strong> pick your destination</div>
                    <div className="dest-info">
                        <div className="dest-image">
                            <img src={dests[this.state.currDest].img} alt={dests[this.state.currDest].name}></img>
                        </div>
                        <div className="dest-content">
                            <div className="dest-navbar">
                                <ul>
                                    <li onClick={() => {this.onChangeDestination(0)}}>MOON</li>
                                    <li onMouseEnter={() => {this.onChangeDestination(1)}}>MARS</li>
                                    <li onMouseEnter={() => {this.onChangeDestination(2)}}>EUROPA</li>
                                    <li onMouseEnter={() => {this.onChangeDestination(3)}}>TITAN</li>
                                </ul>
                            </div>
                            <div className="dest-name">{dests[this.state.currDest].name}</div>
                            <div className="dest-text">{dests[this.state.currDest].text}</div>
                            <hr/>
                            <div className="dest-dist-time">
                                <div className = "avg-dist">
                                    <p>AVG. DISTANCE</p>
                                    <p className = 'dist-time'>{dests[this.state.currDest].avgDist}</p>
                                </div>
                                <div className = "trav-time">
                                    <p>EST. TRAVEL TIME</p>
                                    <p className = 'dist-time'>{dests[this.state.currDest].travTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Destination