import React from 'react'
import { AiFillTwitterCircle , AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './social.module.css'

const social = () => {
  return (
    <div className={styles.social}>
      <AiFillTwitterCircle className={styles.tweet} />
      <FaLinkedinIn className={styles.linkd} />
<AiFillGithub className={styles.git}  />
    </div>
  )
}

export default social