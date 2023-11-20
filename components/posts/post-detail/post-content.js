import React from 'react'
import PostHeader from './post-header'
import classes from './post-content.module.css'

function PostContent() {

    const dummy = {title:'testing', image:'started.jpg', excerpt:'testing', date:'11-21-2022', slug:'started'}
    const imagePath = `/images/posts/${dummy.slug}/${dummy.image}`
  return (
    <article className={classes.content}>
        <PostHeader title={dummy.title} image={imagePath}  />
        content
    </article>
  )
}

export default PostContent