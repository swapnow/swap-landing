import React from 'react';
import autoBind from 'react-autobind';

interface Props {}

interface State {
  email: string;
  showError: boolean;
}

class EmailForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      showError: false
    };

    autoBind(this);
  }

  private sendEmail(e) {
    e.preventDefault();

    if (this.isEmailAddress(this.state.email)) {
      // send email
    } else {
      this.setState({ showError: true });
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

          <div id='error' className={this.state.showError ? '' : 'hidden'}>
            Please enter a valid .edu email.
          </div>

          <input
            id='email'
            type="text"
            placeholder="Your Berkeley Edu Email"
            onChange={this.update}
          />

          <input
            type="submit"
            value="Sign Me Up!"
          />
      </form>
    );
  }
}

export default EmailForm;