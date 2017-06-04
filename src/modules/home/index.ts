import { connect } from 'react-redux';
import { Dispatch } from 'react-redux';
import Home from './component';

interface StateProps {
}

interface DispatchProps {
}

const mapStateToProps = (state: any, ownProp?: any): StateProps => ({
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
