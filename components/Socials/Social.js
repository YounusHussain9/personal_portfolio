import React from 'react'
import Link from 'next/link';
import { AiFillTwitterCircle , AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './social.module.css'

const social = () => {
  return (
    <div className={styles.social}>
     
     <Link href='https://mobile.twitter.com/younushussain_9'><AiFillTwitterCircle className={styles.tweet} /></Link>


  <Link href='https://www.linkedin.com/mwlite/in/younus-hussain-3357411b2'><FaLinkedinIn className={styles.linkd} /></Link>
<Link href='https://github.com/YounusHussain9'><AiFillGithub className={styles.git}  /></Link>
    </div>
  )
}

export default social