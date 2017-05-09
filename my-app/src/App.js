import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Import Compnent
import Header from './header';
import Body from './body';
import Footer from './footer';
import User from './User';
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
		<Router>
			<div>
				<Header />
				<Route exact path='/Body' component={Body} />
				<Route exact path='/User' component={User} />

				<Footer />
			</div>
		</Router>
	);
    return (
		element
    );
  }

}

export default App;
