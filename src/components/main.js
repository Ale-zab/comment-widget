import React from 'react';

const ReviewMain = (props) => {
    return (
        <div className="main-comment-published-block">
            <p className="comment-description-published">
                {props.description}
            </p>
        </div>
    )
};

export default ReviewMain
