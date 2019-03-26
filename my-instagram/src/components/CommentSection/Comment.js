import React from 'react'
import './commentSection.css'
import PropTypes from 'prop-types'


const Comment = (props) => {
    return (
        <div className="user-comment-wrapper">
            <p><span className="commenter-name">{props.comments.username} </span>{props.comments.text}</p>
        </div>

    )
}

export default Comment

Comment.propTypes = {
    comments: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })    
}