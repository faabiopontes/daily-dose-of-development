import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '1004168609684-bivbksi3eh1c82gnssg0ak2fiqlv0rlf.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
