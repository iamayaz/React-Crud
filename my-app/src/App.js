import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header';
import './App.css';


class App extends Component {
	  
  render() {
		/* const element = (<div className="App">
			<div className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h2>Welcome to React</h2>
			</div>
		</div>); */ 
		
	//setInterval(tick, 1000);	
	const 	element = (
		<Header />
	);
    return (
		element
    );
  }

}

export default App;
