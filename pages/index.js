import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Hero from '@/components/home-page/Hero'
import FeaturedPosts from '@/components/home-page/featured-posts'

const inter = Inter({ subsets: ['latin'] })

const dummy = [
  {title:'testing', image:'started.jpg', excerpt:'testing', date:'11-21-2022', slug:'started'},
  {title:'testing2', image:'started.jpg', excerpt:'testing2', date:'01-10-2022', slug:'started2'},
  {title:'testing3', image:'started.jpg', excerpt:'testing3', date:'03-03-2023', slug:'started3'},
]

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummy} />
    </Fragment>
  )
}
