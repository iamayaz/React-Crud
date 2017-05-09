import React, { Component } from 'react';
class User extends Component {
  render() {
	const 	bodyContent = 'This is User content';
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
export default User;