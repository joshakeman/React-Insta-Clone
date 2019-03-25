import React from 'react'
import './commentSection.css'

const Comment = (props) => {
    return (
        <div className="user-comment-wrapper">
            <p><span class="commenter-name">{props.comments.username} </span>{props.comments.text}</p>
        </div>

    )
}

export default Comment