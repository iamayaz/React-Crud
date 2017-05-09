import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
class Header extends Component {
  render() {
	const 	title = 'Hello React! Header';
	const  	time = new Date().toLocaleTimeString();
	const 	element = (
		<header>

			  <img src={logo} className="App-logo" alt="logo" />
			 
			<h1>{title}</h1>
			<h2>It is {time}.</h2>
			<ul>
				<li>
					<Link to="Body"></Link>
					<a href="Body">Body</a>
				</li>
				<li>
					<Link to="User"></Link>
					<a href="User">User</a>
				</li>
			</ul>
		</header>
	);
    return (
		element
    );
  }

}
export default Header;