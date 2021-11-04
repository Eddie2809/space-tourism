import {Component} from 'react'
import Navbar from '../components/Navbar'
import BackgroundDesktop from '../assets/home/background-home-desktop.jpg'
import BackgroundTablet from '../assets/home/background-home-tablet.jpg'
import BackgroundMobile from '../assets/home/background-home-mobile.jpg'

class Home extends Component{
    render(){
        return(
            <div className = "Home">
                <img className="background background-desktop" alt='earth-background' src={BackgroundDesktop}></img>
                <img className="background background-tablet" alt='earth-background' src={BackgroundTablet}></img>
                <img className="background background-mobile" alt='earth-background' src={BackgroundMobile}></img>
                <Navbar onChangeRoute={this.props.onChangeRoute}/>
                <div className="contentContainer">
                    <div className="content">
                        <div className="subtitle">So, you want to travel to</div>
                        <div className="bigtitle">SPACE</div>
                        <div className="bodytext">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                    </div>
                </div>
                <div className="exploreContainer">
                    <div className="title explore">
                        Explore
                    </div>
                </div>
            </div>
        )
    }
}

export default Home