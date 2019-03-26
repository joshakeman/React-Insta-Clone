import React from 'react'
import './postContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

class PostContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            likes: props.data.likes

        }
    }

    addLikes = () => {

        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
    return (
        <div className="post-container">    
            <div className="user-header">
                <img src={this.state.data.thumbnailUrl} alt="" className="user-icon"/>
                <h3 className="user-name">{this.state.data.username}</h3>
            </div>
            <div className="post-image-holder">
                <img src={this.state.data.imageUrl} alt="" className="post-image"></img>
            </div>
            <div className="post-buttons">
                <img src={process.env.PUBLIC_URL + '/img/comments-regular.svg'} alt="" className="comment-button"/>
                <img src={process.env.PUBLIC_URL + '/img/heart-regular.svg'} alt="" className="like-post-button" onClick={this.addLikes}/>
            </div>
            <div className="likes-count-wrapper">
                <h3 className="likes-count">{this.state.likes} likes</h3>
            </div>
            <CommentSection
            comments={this.state.data.comments}
                />
                {/* <CommentSection props={props.data} /> */}
        </div>
        )
    }
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