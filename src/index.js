import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:20PM" content="I like this blog" avatar={faker.image.avatar()} />
            <CommentDetail author="Alex" timeAgo="Today at 5:15PM" content="I like the writing" avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Today at 2:00AM" content="I like whatever" avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));