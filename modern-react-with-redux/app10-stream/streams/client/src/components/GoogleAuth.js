import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1004168609684-bivbksi3eh1c82gnssg0ak2fiqlv0rlf.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      let userId = this.auth.currentUser.get().getId();
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui blue google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut },
)(GoogleAuth);
