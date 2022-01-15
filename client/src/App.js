import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

class App extends Component {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" render = {
					() => (
						<Redirect to="/home"></Redirect>
					)
				} />
				<Route exact path="/home" component={HomePage} />
			</BrowserRouter>
		)
	}
}

export default App;
