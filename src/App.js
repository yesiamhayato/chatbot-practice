import './App.css';
import React from 'react';
import defaultDataset from './dataset';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: [],
			chats: [],
			currentId: "init",
			dataset: defaultDataset,
			open: false
		}
	}
	render() {
		return (
			<div>

			</div>
		);
	}
}

export default App;
