import React from 'react';
import { withRouter } from 'react-router';
declare var $;
declare var window;

class NavBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public initializeNavbarFade() {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('#menu').fadeIn(500);
      } else {
        $('#menu').fadeOut(500);
      }
    });
  }


  public render() {
    return (
      <div>
        <nav id="menu" className="navbar navbar-default navbar-static-top navbar-padded text-uppercase app-navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed p-x-0" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <span>Swap</span>
              </a>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-default navbar-static-top navbar-padded text-uppercase app-navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed p-x-0" data-toggle="collapse" data-target="#navbar-collapse2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
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
