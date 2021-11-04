import {Component} from 'react'
import Logo from '../assets/shared/logo.svg'
import HamburgerMenu from '../assets/shared/icon-hamburger.svg'

class Navbar extends Component{

    render(){
        return(
            <div className="Navbar">
                <img id="logo" src={Logo} alt='logo'></img>
                <img id="hamb" src={HamburgerMenu} alt='menu'></img>
                <div className = 'subtitle navbar-buttons'>
                    <ul>
                        <li onClick={() => {this.props.onChangeRoute('home')}}><div><strong className="hide-for-tablet">00</strong> Home</div></li>
                        <li onClick={() => {this.props.onChangeRoute('destination')}}><div><strong className="hide-for-tablet">01</strong> Destination</div></li>
                        <li onClick={() => {this.props.onChangeRoute('crew')}}><div><strong className="hide-for-tablet">02</strong> Crew</div></li>
                        <li onClick={() => {this.props.onChangeRoute('technology')}}><div><strong className="hide-for-tablet">03</strong> Technology</div></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar