import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';

const App = () => (
  <div className="ui container comments">
    <CommentDetail author="Sam" />
    <CommentDetail author="Alex" />
    <CommentDetail author="Jane" />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));