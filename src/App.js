import './style/responsive/style.css'
import {Component} from 'react'

import Home from './routes/Home'
import Crew from './routes/Crew'
import Destination from './routes/Destinations'
import Techonology from './routes/Technology'

import Navbar from './components/Navbar'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      route: 'home'
    }
  }

  onChangeRoute = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }


  render(){
    return(
      <div className = 'App'>
        <Navbar onChangeRoute={this.onChangeRoute}/>
        {
          this.state.route === 'home'? <Home/> :
          this.state.route === 'destination'? <Destination/> :
          this.state.route === 'crew'? <Crew/> : 
          this.state.route === 'technology'? <Techonology/> : <div></div>
        }
      </div>
    )
  }

}

export default App;
