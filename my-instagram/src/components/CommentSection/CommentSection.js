import React from 'react'
import Comment from './Comment'
import './commentSection.css'
import PropTypes from 'prop-types'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNewComment = (e, index) => {
        // console.log(e.target)
        // console.log(e.target.name)
        console.log(e.target.value)
        e.preventDefault();

        const newComment = {
            // text: e.text.value,
            text: this.state.comment,
            username: 'Meeeeeee'
        }

        this.setState({
            comments: [...this.state.comments, newComment],
            // .push(e.target.value)
            // comment: ''

        }) 
    }


    render() {
        return (
            <div className="comment-section-wrapper">
                <div className="user-comment-section">
                    {this.state.comments.map((obj, key) =>
                    <Comment
                    key={key} 
                    comments={obj}
                    />
                    )}
                    
                    <div className="time-stamp-wrapper">
                        <span className="time-stamp">2 HOURS AGO</span>
                    </div>
                </div>

                <div className="add-comment-wrapper">
                    <div className="comment-input">
                        <form onSubmit={this.addNewComment}>
                            <input 
                                type="text"
                                name="comment"
                                placeholder="Add a comment..." 
                                className="comment-input"
                                onChange={this.handleChanges}
                                ></input>
                            </form>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/img/ellipsis-h-solid.svg'} alt="" className="ellipsis"/>
                </div>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
    PropTypes.shape({
    })
    )
}


export default CommentSection