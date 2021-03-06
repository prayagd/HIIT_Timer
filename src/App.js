import React from 'react';
let countDown = 0,
	bool = false,
	timeLeft = 0;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialDuration: 20,
			initialBreak: 10,
			initialSet: 0,
			isRunning: false,
			control: 0
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
		clearInterval(countDown);
		if (this.state.initialSet > 0) {
			if (timeLeft === this.state.initialBreak) {
				this.setState({
					initialSet: this.state.initialSet - 1
				});
			}
			countDown = setInterval(() => {
				timeLeft = timeLeft - 1;
				if (timeLeft < 0) {
					clearInterval(countDown);
					this.audioBeep.currentTime = 2;
					this.audioBeep.play();
					if (timeLeft === -1 && this.state.initialSet !== 0) {
						this.handleSwitch();
					}
				}
				this.handleDisplay(timeLeft);
			}, 1000);
		}
	}

	handleSwitch() {
		if (this.state.initialSet > 0) {
			bool = !bool;
			this.setState({
				isRunning: true,
				control: bool
			});
			if (!bool) {
				timeLeft = this.state.initialBreak;
				clearInterval(countDown);
				this.handleStart();
			} else {
				timeLeft = this.state.initialDuration;
				clearInterval(countDown);
				this.handleStart();
			}
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
		clearInterval(countDown);
		bool = false;
		timeLeft = 0;
		this.setState({
			initialDuration: 20,
			initialBreak: 10,
			initialSet: 0,
			isRunning: false,
			control: 0
		});
		let displayTime = document.querySelector('#time-left');
		displayTime.textContent = `00:${this.state.initialDuration}`;
		this.audioBeep.pause();
		this.audioBeep.currentTime = 0;
	}

	render() {
		if (!this.state.isRunning) {
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
						<span>
							00:{this.state.initialDuration > 9 ? (
								this.state.initialDuration
							) : (
								`0` + this.state.initialDuration
							)}
						</span>
						<button id="change" onClick={this.handleDuration} value="+">
							+
						</button>
					</div>
					<div>
						<p>Rest Duration</p>
						<button id="change" onClick={this.handleBreak} value="-">
							-
						</button>
						<span>
							00:{this.state.initialBreak > 9 ? this.state.initialBreak : `0` + this.state.initialBreak}
						</span>
						<button id="change" onClick={this.handleBreak} value="+">
							+
						</button>
					</div>
					<div>
						<button id="controls" onClick={this.handleSwitch}>
							Start
						</button>
					</div>
				</div>
			);
		} else {
			return (
				<div id="timer-display">
					<h2>{this.state.control ? `Work` : `Rest`}</h2>
					<div id="display">
						<div id="sets">{this.state.initialSet}</div>
						<div id="time-left">00:00</div>
					</div>
					<div>
						<button id="controls" onClick={this.handleInit}>
							Reset
						</button>
					</div>
					<audio
						id="beep"
						preload="auto"
						type="audio/mpeg"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1016174/ding2.mp3"
						ref={(audio) => {
							this.audioBeep = audio;
						}}
					/>
				</div>
			);
		}
	}
}

export default App;
