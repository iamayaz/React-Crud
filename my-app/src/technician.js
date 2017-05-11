import React, { Component } from 'react';
class Technician extends Component {
  render() {
	const 	bodyContent = 'This is Technician content';
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
export default Technician;