import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Hero from '@/components/home-page/Hero'
import FeaturedPosts from '@/components/home-page/featured-posts'
import { getFeaturedPosts } from '@/lib/post-util'

const inter = Inter({ subsets: ['latin'] })


export default function Home(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps(){
  const featured = getFeaturedPosts()

  return {
    props: {
      posts: featured
    },
    revalidate: 60
  }
}
