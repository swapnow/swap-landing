import React from 'react';
declare let Date;

interface Props {
}

class Home extends React.Component<any, {}> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    $('#thank-you').hide();
    this.initializeCountDown();
    $('#email').focus();
  }

  public sendEmail(e) {
    e.preventDefault();
    const email = $('#email').val();
    $.ajax({
      method: "POST",
      url: "/api/emails",
      data: { email }
    })
    .then(() => console.log("OK"))
    .fail(() => console.log("Fail"))

    $('#email-input').hide();
    $('#thank-you').show();
  }

  public initializeCountDown() {
    function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

    function initializeClock(id, endtime) {
      let clock = document.getElementById(id);
      let daysSpan = clock.querySelector('.days');
      let hoursSpan = clock.querySelector('.hours');
      let minutesSpan = clock.querySelector('.minutes');
      let secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days.toString();
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      let timeinterval = setInterval(updateClock, 1000);
    }

    let deadline = new Date(Date.parse(new Date(2017, 6, 1)));
    initializeClock('clockdiv', deadline);
  }

  public clock() {
    return (
      <div id="clockdiv">
        <div>
          <span className="days"></span>
          <div className="smalltext">Days</div>
        </div>
        <div>
          <span className="hours"></span>
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes"></span>
          <div className="smalltext">Minutes</div>
        </div>
        <div>
          <span className="seconds"></span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    )
  }

  public render() {
    return (
      <div>
        <div className="block app-block-intro">
          <div className="container text-center">
            <h1 className="block-title m-b-sm text-uppercase app-myphone-brand">Swap</h1>
            <p className="lead m-b-lg p-b-md">Best marketplace. For students, exclusively.</p>
             {this.clock()}
            <br/><br/><br/><br/><br/>
            <form onSubmit={ this.sendEmail }>
              <div id='email-input' className="form-group input-group">
                <input id='email'
                  type="text"
                  className="form-control"
                  placeholder="Your email"
                  aria-describedby="basic-addon2"
                />
                <button onClick={ this.sendEmail } type="button" className="btn btn-primary btn-lg btn-block">Remind me when goes SwapNow live!*</button>
                <h5>*Get a chance to win a $25 Amazon gift card!<br/>Winner will be randomly selected and notified from email pool.</h5>
              </div>
            </form>
            <div id='thank-you'>
              <h3>Thank you!<br/>Once we go live, we'll shoot you an email!</h3>
            </div>
            <br/><br/><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
