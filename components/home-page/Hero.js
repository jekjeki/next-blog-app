import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'
import photo from '../../public/images/zaky-photo.jpg'

function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src={photo} alt='image profile' width={300} height={300} />
        </div>
        <h1>Hi i'm Zaky</h1>
        <p>This blog about web development</p>
    </section>
  )
}

export default Hero