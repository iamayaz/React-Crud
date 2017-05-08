import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


function RenderDOM(){
	ReactDOM.render(
		<App />,
		document.getElementById('first-app-root')
	);
}

setInterval(RenderDOM, 1000);