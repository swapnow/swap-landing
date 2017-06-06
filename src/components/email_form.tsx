import React from 'react';
import autoBind from 'react-autobind';

interface State {
  email: string;
  showError: boolean;
  renderSuccessMessage: boolean;
}

class EmailForm extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      showError: false,
      renderSuccessMessage: false
    };

    autoBind(this);
  }

  private sendEmail(e) {
    e.preventDefault();
    let { email } = this.state;

    if (this.isEmailAddress(email)) {
      $.ajax({
        method: "POST",
        url: "/api/emails",
        data: { email }
      }).then(
        () => {
          this.setState({ 
            showError: false,
            renderSuccessMessage: true
          });
        }
      )
    } else {
      this.setState({ showError: true });
    }
  }

  private isEmailAddress(str) {
    let pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.edu)+$/;
    return pattern.test(str);
  }

  private update(e) {
    this.setState({ email: e.target.value, showError: false });
  }

  private renderType() {
    if (this.state.renderSuccessMessage) {
      return (
        <div className='form-success'>
          Thank you. We will shoot you an email once we are live.
        </div> 
      )
    } else {
      return (
        <form id="email-input-form" onSubmit={this.sendEmail}>
          <div id='error' className={this.state.showError ? '' : 'hidden'}>
            Please enter a valid .edu email
          </div>

          <input
            id='email'
            type="text"
            placeholder="Your Berkeley email"
            className={this.state.showError ? 'redish' : '' }
            onChange={this.update}
          />

          <input
            type="submit"
            value="Sign Me Up!"
          />
        </form>
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderType() }
      </div>
    );
  }
}

export default EmailForm;