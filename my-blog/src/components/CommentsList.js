import React from 'react';

const CommentsList = ({ comments }) => (
    <React.Fragment>
        {comments.map((comment, key) => (
            <div className="comment" key={key}>
                <h4>{comment.userName}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </React.Fragment>

)

export default CommentsList;