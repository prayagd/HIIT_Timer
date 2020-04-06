import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialDuration: 20,
			initialBreak: 10,
			initialSet: 1
		};
		this.handleDuration = this.handleDuration.bind(this);
		this.handleBreak = this.handleBreak.bind(this);
		this.handleSet = this.handleSet.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleInit = this.handleInit.bind(this);
	}

	handleDuration(e) {
		let { initialDuration } = this.state;
		if (initialDuration > 0) {
			if (e.target.value === '+') {
				this.setState({
					initialDuration: initialDuration + 1
				});
			}
			if (e.target.value === '-') {
				this.setState({
					initialDuration: initialDuration - 1
				});
			}
		}
	}

	handleBreak(e) {
		let { initialBreak } = this.state;
		if (initialBreak > 0) {
			if (e.target.value === '+') {
				this.setState({
					initialBreak: initialBreak + 1
				});
			}
			if (e.target.value === '-') {
				this.setState({
					initialBreak: initialBreak - 1
				});
			}
		}
	}

	handleSet(e) {
		let { initialSet } = this.state;
		if (initialSet > 0) {
			if (e.target.value === '+') {
				this.setState({
					initialSet: initialSet + 1
				});
			}
			if (e.target.value === '-') {
				this.setState({
					initialSet: initialSet - 1
				});
			}
		}
	}

	handleDisplay(e) {}

	handleStart(e) {}

	handleInit(e) {
		this.setState({
			initialDuration: 20,
			initialBreak: 10,
			initialSet: 1
		});
	}

	render() {
		return (
			<div>
				<div>
					<p>Sets</p>
					<button onClick={this.handleSet} value="-">
						-
					</button>
					<span>{this.state.initialSet}</span>
					<button onClick={this.handleSet} value="+">
						+
					</button>
				</div>
				<div>
					<p>Workout Duration</p>
					<button onClick={this.handleDuration} value="-">
						-
					</button>
					<span>00:{this.state.initialDuration}</span>
					<button onClick={this.handleDuration} value="+">
						+
					</button>
				</div>
				<div>
					<p>Rest</p>
					<button onClick={this.handleBreak} value="-">
						-
					</button>
					<span>00:{this.state.initialBreak}</span>
					<button onClick={this.handleBreak} value="+">
						+
					</button>
				</div>
				<button onClick={this.handleStart}>Start</button>
				<button onClick={this.handleInit}>Reset</button>
				<div id="display">
					<h2>Work</h2>
					<span>00:00</span>
				</div>
			</div>
		);
	}
}

export default App;
