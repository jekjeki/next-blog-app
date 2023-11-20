import React from 'react'
import PostsGrid from './post-grid'
import classes from './all-posts.module.css'

function AllPosts(props) {

    const {posts} = props 

  return (
    <div className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
    </div>
  )
}

export default AllPosts