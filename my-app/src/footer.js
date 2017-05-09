import React, { Component } from 'react';
class Footer extends Component {
  render() {
	const 	title = 'This is Footer';
	const 	element = (
		<footer>
			<p>{title}</p>
		</footer>
	);
    return (
		element
    );
  }

}
export default Footer;