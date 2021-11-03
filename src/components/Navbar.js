import {Component} from 'react'
import Logo from '../assets/shared/logo.svg'

class Navbar extends Component{

    render(){
        return(
            <div className="Navbar">
                <img src={Logo} alt='logo'></img>
                <div className='hamb-menu none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
                </div>
                <div className = 'navbar-buttons-desktop hide-for-mobile'>
                    <ul>
                        <li onClick={() => {this.props.onChangeRoute('home')}}><div><strong className="hide-for-tablet">00</strong> Home</div></li>
                        <li onClick={() => {this.props.onChangeRoute('destination')}}><div><strong className="hide-for-tablet">01</strong> Destination</div></li>
                        <li onClick={() => {this.props.onChangeRoute('crew')}}><div><strong className="hide-for-tablet">02</strong> Crew</div></li>
                        <li onClick={() => {this.props.onChangeRoute('technology')}}><div><strong className="hide-for-tablet">03</strong> Technology</div></li>
                    </ul>
                </div>
                <div className='navbar-buttons-mobile none'>
                <ul>
                        <li onClick={() => {this.props.onChangeRoute('home')}}><strong>00 \ </strong> Home</li>
                        <li onClick={() => {this.props.onChangeRoute('destination')}}><strong>01</strong> Destination</li>
                        <li onClick={() => {this.props.onChangeRoute('crew')}}><strong>02</strong> Crew</li>
                        <li onClick={() => {this.props.onChangeRoute('technology')}}><strong>03</strong> Technology</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar