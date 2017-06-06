import React from 'react';
import autoBind from 'react-autobind';

interface Props {}

interface State {
  email: string;
}

class EmailForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    autoBind(this);
  }

  private sendEmail(e) {
    e.preventDefault();

    if (this.isEmailAddress(this.state.email)) {
      // send email
    } else {
      
      
    }
  }

  private isEmailAddress(str) {
    let pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.edu)+$/;
    return pattern.test(str);
  }

  private update(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <form id="email-input-form" onSubmit={this.sendEmail}>
        <div id='email-input' className="form-group input-group">
          <div id='error' className='hidden'>
            Please enter a valid .edu email.
          </div>
          
          <input
            id='email'
            type="email"
            placeholder="Your Berkeley Edu Email"
            onChange={this.update}
          />

          <button
            onClick={this.sendEmail}
            type="button"
            className=""
          >
            Remind me when SwapNow goes live!*
          </button>
         
        </div>
      </form>
    );
  }
}

export default EmailForm;