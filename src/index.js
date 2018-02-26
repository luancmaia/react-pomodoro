import React from 'react';
import css from './pomodoro.css';

class Pomodoro extends React.Component {

	constructor() {
		super();
		this.state = { timer: 10 };
	}

	incrementTimer() {
		if ( this.state.timer - 1 == 0 ) {
			clearInterval(this.interval);
		} else {
			this.setState({ timer: this.state.timer - 1 });
		}
	}

	handleStartPomodoro() {
		this.incrementTimer();
		this.interval = setInterval(() => this.incrementTimer(), 1000);
	}

	handleStopPomodoro() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<span className="counter">{this.state.timer}</span>
				<div className="actions">
					<span className="action-btn" onClick={this.handleStartPomodoro.bind(this)}>Start</span>
					<span className="action-btn" onClick={this.handleStopPomodoro.bind(this)}>Stop</span>
				</div>
			</div>
		);
	}

}

export default Pomodoro;