import React from 'react';

const ReviewHeader = (props) => {
    return (
        <div className="header-comment-published-block">
            <div className="header-comment-published-block-left">
                <img src="src/image/user.svg" alt="user" className="comment-image-published" />
                <h2 className="comment-people-published">
                    {props.name}
                </h2>
            </div>
            <div className="header-comment-published-block-right">
                <img src="src/image/cancel.svg"
                     alt="close"
                     className="header-comment-published-block-icon close"
                     onClick={props.removeReview}
                 />
            </div>
        </div>
    )
};

export default ReviewHeader
