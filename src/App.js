import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialDuration: 20,
			initialBreak: 10
		};
		this.handleDuration = this.handleDuration.bind(this);
		this.handleBreak = this.handleBreak.bind(this);
	}

	handleDuration(e) {
		let { initialDuration } = this.state;
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

	handleBreak(e) {
		let { initialBreak } = this.state;
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

	handleSet(e) {
		let { initialBreak } = this.state;
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

	handleDisplay(e) {}

	render() {
		return (
			<div>
				<div>
					<p>Sets</p>
					<button>-</button>
					<span>16</span>
					<button>+</button>
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
				<button>Start</button>
				<button>Reset</button>
				<div id="display">
					<h2>Work</h2>
					<span>00:00</span>
				</div>
			</div>
		);
	}
}

export default App;
