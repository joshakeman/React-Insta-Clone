import React from 'react'
import './postContainer.css'

const PostContainer = (props) => {
    return (
    <div className="post-container">    
        <div className="user-header">
            <img src={process.env.PUBLIC_URL + '/img/user-regular.svg'} className="user-icon"/>
            <h3 className="user-name">joshakeman</h3>
        </div>
        <div className="post-image-holder">
            <img src="https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg" className="post-image"></img>
        </div>
        <div className="post-buttons">
            <img src={process.env.PUBLIC_URL + '/img/comments-regular.svg'} className="comment-button"/>
            <img src={process.env.PUBLIC_URL + '/img/heart-regular.svg'} className="like-post-button"/>
        </div>
        <div className="likes-count-wrapper">
            <h3 className="likes-count">373 likes</h3>
        </div>
    </div>
    )
}

export default PostContainer