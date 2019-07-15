import React from 'react';

const ReviewFooter = (props) => {
    return (
        <div className="footer-comment-published-block">
            <p className="date-published">
                {props.time}
            </p>
        </div>
    )
};

export default ReviewFooter
