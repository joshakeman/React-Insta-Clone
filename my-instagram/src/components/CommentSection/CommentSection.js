import React from 'react'
import Comment from './Comment'
import './commentSection.css'

const CommentSection = (props) => {
    return (
        <div className="comment-section-wrapper">
            <div className="user-comment-section">
                {props.comments.map((obj, key) =>
                <Comment
                key={key} 
                comments={obj}
                />
                )}
                {/* <Comment /> */}
                {/* <div className="user-comment-wrapper">
                    <p><span class="commenter-name">{props.comments.username} </span>{props.comments.text}</p>
                </div>
                <div className="user-comment-wrapper">
                    <p><span class="commenter-name">biancasaurus_ </span>T-minus a month until big/Little/Glil coffee dates!!! <span class="blue-text">@tiffany_monroy @msafransky</span></p>
                </div> */}
                <div className="time-stamp-wrapper">
                    <span class="time-stamp">2 HOURS AGO</span>
                </div>
            </div>

            <div className="add-comment-wrapper">
                <div className="comment-input">
                    <input type="text" placeholder="Add a comment..." className="comment-input"></input>
                </div>
                <img src={process.env.PUBLIC_URL + '/img/ellipsis-h-solid.svg'} className="ellipsis"/>
            </div>
        </div>
    )
}

export default CommentSection