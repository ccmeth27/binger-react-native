import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Auth from '../components/Auth';
import * as usersActions from '../actions/usersActions';

const actions = {
  ...usersActions,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);