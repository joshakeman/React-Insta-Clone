import React from 'react'
import SearchBar from '../Searchbar/SearchBar'
import PostContainer from './PostContainer'

const PostsPage = (props) => {
    return (
        <div className="container">
          <SearchBar 
          handleChanges = {props.handleChanges}
          filterPosts = {props.filterPosts}
          />
          {/* <PostContainer username={dummyData[0].username}/> */}
          {props.data.map((obj, timestamp) => 
            <PostContainer
              key={obj.timestamp}
              // prop_key={index}
              data={obj}
            //   addLikes={this.addLikes}
              />
          )}
        </div>
    )
}

export default PostsPage