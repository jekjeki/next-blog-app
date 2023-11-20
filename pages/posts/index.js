import AllPosts from '@/components/posts/all-posts'
import React from 'react'

function AllPostsPage() {

  const dummy = [
    {title:'testing', image:'started.jpg', excerpt:'testing', date:'11-21-2022', slug:'started'},
    {title:'testing2', image:'started.jpg', excerpt:'testing2', date:'01-10-2022', slug:'started2'},
    {title:'testing3', image:'started.jpg', excerpt:'testing3', date:'03-03-2023', slug:'started3'},
  ]

  return (
    <div>
      <AllPosts posts={dummy} />
    </div>
  )
}

export default AllPostsPage