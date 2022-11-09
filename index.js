import React from 'react';
import ReactDOM from 'react-dom';
import Hemisphere from './Hemispheredisplay';

class App extends React.Component
{
	state = {latitude:'', longitude:'', error:''}
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({latitude : position.coords.latitude})
				this.setState({longitude : position.coords.longitude})
			},
			(error) => {
				this.setState({error : error.message})
			} 
		)
	}
	render(){
		
		if(this.state.latitude && this.state.longitude)
		{
			return <div><Hemisphere latitude={this.state.latitude} longitude={this.state.longitude}/></div>
						
		}
		else
		{
			return <div>{"Error = "+this.state.error}</div>
		}
		
	}
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)