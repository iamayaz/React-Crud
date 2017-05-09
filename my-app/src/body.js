import React, { Component } from 'react';
class Body extends Component {
  render() {
	const 	bodyContent = 'This is body content';
	const 	elementContent = (
		<div class="container">
			<p>{bodyContent}</p>
		</div>
	);
    return (
		elementContent
    );
  }

}
export default Body;