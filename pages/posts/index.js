import AllPosts from '@/components/posts/all-posts'
import { getAllPosts } from '@/lib/post-util'
import React from 'react'

function AllPostsPage(props) {

  return (
    <div>
      <AllPosts posts={props.posts} />
    </div>
  )
}

export function getStaticProps(){
  const posts = getAllPosts()

  return {
    props: {
      posts: posts
    },
    revalidate: 60
  }
}

export default AllPostsPage