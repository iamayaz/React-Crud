import React, { Component } from 'react';
class Header extends Component {
	  
  render() {

	const 	title = 'Hello React! Header';
	const  	time = new Date().toLocaleTimeString();
	const 	element = (
		<header>
			<h1>{title}</h1>
			<h2>It is {time}.</h2>
		</header>
	);
    return (
		element
    );
  }

}

export default Header;
