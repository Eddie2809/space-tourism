import './style/responsive/style.css'
import {Component} from 'react'

import Home from './routes/Home'
import Crew from './routes/Crew'
import Destination from './routes/Destinations'
import Techonology from './routes/Technology'

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
        {
          this.state.route === 'home'? <Home  onChangeRoute={this.onChangeRoute}/> :
          this.state.route === 'destination'? <Destination  onChangeRoute={this.onChangeRoute}/> :
          this.state.route === 'crew'? <Crew  onChangeRoute={this.onChangeRoute}/> : 
          this.state.route === 'technology'? <Techonology  onChangeRoute={this.onChangeRoute}/> : <div></div>
        }
      </div>
    )
  }

}

export default App;
