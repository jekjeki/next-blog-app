import React from 'react'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function PostContent(props) {

  const {post} = props
  // const dummy = {title:'testing', image:'started.jpg', excerpt:'testing', date:'11-21-2022', slug:'getting-started'}
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenders = {
    // img(image){
    //   return 
    // },
    p(paraghraph){
      const {node} = paraghraph

      if(node.children[0].type === 'image'){
        const image = node.children[0]

        return <div className={classes.image}>
          <Image 
          src={`/images/posts/${post.slug}/${image.src}`} 
          alt={image.alt}
          width={600}
          height={300}
          layout='responsive'
          />
        </div>
      }

      return <p>{paraghraph.children}</p>
    },
    code(code){
      const {language, value} = code
      return (
         <SyntaxHighlighter style={atomDark} language={'javascript'} children={value} />
      )
    }
  }



  return (
    <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath}  />
        <ReactMarkdown components={{
          image: customRenders}}>
            {post.content}
        </ReactMarkdown>  
    </article>
  )
}

export default PostContent