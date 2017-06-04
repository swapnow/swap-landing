import { connect } from 'react-redux';
import NavBar from './component';
import { receiveUser } from './actions';

interface StateProps {
  user: any;
}

interface DispatchProps {
  receiveUser: (user: object) => void;
}

const mapStateToProps = (state: any, ownProp?: any): StateProps => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  receiveUser: user => dispatch(receiveUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
