import React, { Component } from 'react';
import logo from './logo.svg';
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
	const 	title = 'Hello React';
	const  	time = new Date().toLocaleTimeString();
	const 	element = (
		<div>
		  <h1>{title}</h1>
		  <h2>It is {time}.</h2>
		</div>
	);
    return (
		element
    );
  }
}

export default App;
