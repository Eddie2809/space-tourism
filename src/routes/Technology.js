import {Component} from 'react'
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'

let techs = [
    {
        name: 'Launch Vehicle',
        info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imgPortrait: launchVehiclePortrait,
        imgLandscape: launchVehicleLandscape
    },
    {
        name: 'Spaceport',
        info: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        imgPortrait: spaceportPortrait,
        imgLandscape: spaceportLandscape
    },
    {
        name: 'Space Capsule',
        info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imgPortrait: spaceCapsulePortrait,
        imgLandscape: spaceCapsuleLandscape
    }
]

class Techonology extends Component{
    constructor(props){
        super(props)
        this.state = {
            currTech: 0
        }
    }

    onChangeTech = (newTech) => {
        this.setState({
            currTech: newTech
        })
    }

    render(){
        return(
            <div className="Techonology">
                <div className='title'><strong>03</strong> SPACE LAUNCH 101</div>
                <div className='content'>
                    <div className='tech-list'>
                        <ul>
                            <li onClick={() => {this.onChangeTech(0)}}>1</li>
                            <li onClick={() => {this.onChangeTech(1)}}>2</li>
                            <li onClick={() => {this.onChangeTech(2)}}>3</li>
                        </ul>
                    </div>
                    <p>The terminology...</p>
                    <div className='tech-name'>{techs[this.state.currTech].name}</div>
                    <div className='tech-info'>{techs[this.state.currTech].info}</div>
                </div>
                <div className='images'>
                    <img className='portrait' src={techs[this.state.currTech].imgPortrait} alt = {techs[this.state.currTech].name}></img>
                    <img className='landscape none' src={techs[this.state.currTech].imgLandscape} alt = {techs[this.state.currTech].name}></img>
                </div>
            </div>
        )
    }
}

export default Techonology