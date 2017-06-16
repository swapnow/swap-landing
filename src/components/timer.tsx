import React from 'react';
import autoBind from 'react-autobind';

interface Props {
}

interface State {
  total: number;
}

class Timer extends React.Component<Props, State> {
  interval;
  constructor(props) {
    super(props);
    this.state = this.initializeClock();

    this.interval;

    autoBind(this);
  }

  public componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  public componetWillUnMount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  private initializeClock() {
    let deadline = Date.parse("July 15, 2017");
    let current = Date.now();

    let total = deadline - current;

    return {
      total
    };
  }

  private tick() {
    this.setState({ total: this.state.total - 1000 });
  }

  private parseTime() {
    let { total } = this.state;
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  render() {

    let { days, hours, minutes, seconds } = this.parseTime();

    return (
      <div id="clockdiv">
        <div className='clock-element'>
          <span className="days">{days}</span>
          <div className="smalltext">Days</div>
        </div>
        <div className='clock-element'>
          <span className="hours">{hours}</span>
          <div className="smalltext">Hours</div>
        </div>
        <div className='clock-element'>
          <span className="minutes">{minutes}</span>
          <div className="smalltext">Minutes</div>
        </div>
        <div className='clock-element'>
          <span className="seconds">{seconds}</span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    )
  }
}

export default Timer;