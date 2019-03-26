import React from 'react'
import './postContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
    return (
    <div className="post-container">    
        <div className="user-header">
            <img src={props.data.thumbnailUrl} className="user-icon"/>
            <h3 className="user-name">{props.data.username}</h3>
        </div>
        <div className="post-image-holder">
            <img src={props.data.imageUrl} className="post-image"></img>
        </div>
        <div className="post-buttons">
            <img src={process.env.PUBLIC_URL + '/img/comments-regular.svg'} className="comment-button"/>
            <img src={process.env.PUBLIC_URL + '/img/heart-regular.svg'} className="like-post-button"/>
        </div>
        <div className="likes-count-wrapper">
            <h3 className="likes-count">{props.data.likes}</h3>
        </div>
        <CommentSection
        comments={props.data.comments}
            />
            {/* <CommentSection props={props.data} /> */}
    </div>
    )
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
    PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.string
    })
    )
}


export default PostContainer