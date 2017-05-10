import React, { Component } from 'react';
class Customer extends Component {
  render() {
	const 	bodyContent = 'This is Customer content';
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
export default Customer;