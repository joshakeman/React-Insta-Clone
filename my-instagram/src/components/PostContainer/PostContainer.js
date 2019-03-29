import React from 'react'
import './postContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import styled from "styled-components";

const PostWrapper = styled.div`
    border: 1px solid lightgray;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 640px;
    align-self: center;
    border-bottom: none;
`

const UserHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 640px;
    align-self: center;
`

const PostButtons = styled.div`
    align-self: center;
    width: 640px;
    display: flex;
    align-items: center;
    padding: 10px;
`

const LikesCountWrapper = styled.div`
    width: 640px;
    align-self: center;
`

const LikesCount = styled.h3`
    text-align: left;
    margin: 0;
    font-size: 1em;
    margin: 0 10px;
`
const UserIcon = styled.img`
    width: 45px;
    height: 45px;
    margin: 0 10px;
    border-radius: 50%;
`

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
        <PostWrapper>    
            <UserHeader>
                {/* <img src={this.state.data.thumbnailUrl} alt="" className="user-icon"/> */}
                <UserIcon src={this.state.data.thumbnailUrl} alt="" />
                <h3 className="user-name">{this.state.data.username}</h3>
            </UserHeader>
            <div className="post-image-holder">
                <img src={this.state.data.imageUrl} alt="" className="post-image"></img>
            </div>
            <PostButtons>
                <img src={process.env.PUBLIC_URL + '/img/comments-regular.svg'} alt="" className="comment-button"/>
                <img src={process.env.PUBLIC_URL + '/img/heart-regular.svg'} alt="" className="like-post-button" onClick={this.addLikes}/>
            </PostButtons>
            <LikesCountWrapper>
                <LikesCount>{this.state.likes} likes</LikesCount>
            </LikesCountWrapper>
            <CommentSection
            comments={this.state.data.comments}
                />
        </PostWrapper>
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