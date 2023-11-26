import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDir = path.join(process.cwd(), 'posts')

export function getPostFiles(){
    return fs.readdirSync(postDir)
}

export function getPostData(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postDir, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)


    const postData = {
        slug: postSlug,
        ...data,
        content: content 
    }

    return postData
}

export function getAllPosts(){
    const postFiles = fs.readdirSync(postDir)

    const allFiles = postFiles.map((post)=>{
        return getPostData(post)
    })

    const sortedPost = allFiles.sort((postA, postB)=> postA.date > postB.date ? -1 : 1)

    return sortedPost
}


export function getFeaturedPosts(){
    const posts = getAllPosts()

    const postFeatured = posts.filter((post)=>post.isFeatured)
    return postFeatured
}

