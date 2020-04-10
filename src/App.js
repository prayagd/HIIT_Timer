import React from 'react';
let countDown,
	bool = true;
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialDuration: 20,
			initialBreak: 10,
			initialSet: 0,
			timeLeft: 0,
			i: 0
		};
		this.handleDuration = this.handleDuration.bind(this);
		this.handleBreak = this.handleBreak.bind(this);
		this.handleSet = this.handleSet.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleInit = this.handleInit.bind(this);
		this.handleDisplay = this.handleDisplay.bind(this);
		this.handleSwitch = this.handleSwitch.bind(this);
	}

	handleDuration(e) {
		let { initialDuration } = this.state;
		if (initialDuration > 0 && initialDuration < 60) {
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
		if (initialBreak > 0 && initialBreak < 60) {
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
		if (initialSet >= 0) {
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
		if (this.state.initialSet > 0) {
			console.log('Hello t');
			if (this.state.i === 1) {
				this.setState({
					initialSet: this.state.initialSet - 1
				});
			}
			let iterArray = [ this.state.initialDuration, this.state.initialBreak ];
			this.setState({
				timeLeft: iterArray[this.state.i]
			});
			countDown = setInterval(() => {
				this.setState({
					timeLeft: this.state.timeLeft - 1
				});
				if (this.state.timeLeft < 0) {
					clearInterval(countDown);
					if (this.state.timeLeft === -1) {
						this.handleSwitch();
					}
				}
				this.handleDisplay(this.state.timeLeft);
			}, 1000);
		}
	}

	handleSwitch() {
		bool = !bool;
		if (!bool) {
			this.setState({
				i: 1
			});
			this.handleStart();
		} else {
			this.setState({
				i: 0
			});
			this.handleStart();
		}
	}

	handleDisplay(seconds) {
		if (seconds >= 0) {
			let displayTime = document.querySelector('#time-left');
			if (this.state.timeLeft === -1) {
				displayTime.textContent = `00:00`;
			} else {
				displayTime.textContent = `00:${seconds > 9 ? seconds : `0` + seconds}`;
			}
		}
	}

	handleInit(e) {
		countDown = 0;
		bool = true;
		this.setState({
			initialDuration: 20,
			initialBreak: 10,
			initialSet: 0,
			timeLeft: 0,
			i: 0
		});
		let displayTime = document.querySelector('#time-left');
		displayTime.textContent = `00:${this.state.initialDuration}`;
	}

	render() {
		return (
			<div id="timer">
				<h1>HIIT-Timer</h1>
				<div>
					<p>Sets</p>
					<button id="change" onClick={this.handleSet} value="-">
						-
					</button>
					<span>{this.state.initialSet}</span>
					<button id="change" onClick={this.handleSet} value="+">
						+
					</button>
				</div>
				<div>
					<p>Workout Duration</p>
					<button id="change" onClick={this.handleDuration} value="-">
						-
					</button>
					<span>00:{this.state.initialDuration}</span>
					<button id="change" onClick={this.handleDuration} value="+">
						+
					</button>
				</div>
				<div>
					<p>Rest</p>
					<button id="change" onClick={this.handleBreak} value="-">
						-
					</button>
					<span>00:{this.state.initialBreak}</span>
					<button id="change" onClick={this.handleBreak} value="+">
						+
					</button>
				</div>
				<div>
					<button id="controls" onClick={this.handleStart}>
						Start
					</button>
					<button id="controls" onClick={this.handleInit}>
						Reset
					</button>
				</div>

				<div id="display">
					<p>Work</p>
					<div>{this.state.initialSet}</div>
					<span id="time-left">00:00</span>
				</div>
			</div>
		);
	}
}

export default App;
