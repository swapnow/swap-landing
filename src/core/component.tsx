import * as React from 'react';
import NavBar from 'core/navbar';
import Footer from 'core/footer';
declare var window;

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div className='home'>
          {this.props.children}
        <Footer />
      </div>
    )
  }
}


export default App;
