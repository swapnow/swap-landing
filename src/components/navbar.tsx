import React from 'react';
import { withRouter } from 'react-router';
declare var $;
declare var window;

class NavBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top navbar-padded text-uppercase app-navbar">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <span>Swap</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);
