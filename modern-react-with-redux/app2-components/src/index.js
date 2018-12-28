import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => (
  <div className="ui container comments">
    <ApprovalCard />
    <CommentDetail
      author="Sam"
      timeAgo="Today at 4:45PM"
      avatar={faker.image.avatar()}
      content="Nice blog post!"
    />
    <CommentDetail
      author="Alex"
      timeAgo="Today at 2:00AM"
      avatar={faker.image.avatar()}
      content="Amazing blog post!"
    />
    <CommentDetail
      author="Jane"
      timeAgo="Today at 5:00PM"
      avatar={faker.image.avatar()}
      content="Awesome blog post!"
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));