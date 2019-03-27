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
          {props.data.map((obj, timestamp) => 
            <PostContainer
              key={obj.timestamp}
              data={obj}
              />
          )}
        </div>
    )
}

export default PostsPage