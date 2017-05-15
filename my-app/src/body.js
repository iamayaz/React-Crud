import React, { Component } from 'react';
class Body extends Component {
	
  render() {
	const 	bodyContent = 'This is body content';
	const 	elementContent = (
		<div class="container">
			<p>{bodyContent}</p>
			
			<form>
				<input type="text" placeholder="Value One"/><br />
				<input type="text" placeholder="Value Two"/><br />
				<button>Submit</button>
			</form>
			
			
		</div>
	);
    return (
		elementContent
    );
  }

}
export default Body;