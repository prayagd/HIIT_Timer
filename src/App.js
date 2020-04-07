import React from 'react';
let countDown = 0;
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialDuration: 20,
			initialBreak: 10,
			initialSet: 1,
			minutes: 0,
			remSeconds: 0,
			timeLeft: 0
		};
		this.handleDuration = this.handleDuration.bind(this);
		this.handleBreak = this.handleBreak.bind(this);
		this.handleSet = this.handleSet.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleInit = this.handleInit.bind(this);
		this.handleDisplay = this.handleDisplay.bind(this);
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

	handleStart(e) {
		this.setState({
			timeLeft: this.state.initialDuration * 60
		});
		countDown = setInterval(() => {
			this.setState({
				timeLeft: this.state.timeLeft - 1
			});
		}, 1000);
		if (this.state.timeLeft < 0) {
			clearInterval(countDown);
		}
		this.handleDisplay(this.state.timeLeft);
	}

	handleDisplay(seconds, e) {
		let displayTime = document.querySelector('#time-left');
		this.setState({ remSeconds: seconds % 60 });
		if (this.state.timeLeft == -1) {
			displayTime.textContent = `00:00`;
		} else {
			displayTime.textContent = `00:${this.state.remSeconds}`;
		}
	}

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
					<span id="time-left">00:00</span>
				</div>
			</div>
		);
	}
}

export default App;
