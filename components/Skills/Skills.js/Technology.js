import React from 'react'
import Link from 'next/link';
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import styles from './tech.module.css'

const Technology = () => {
  return (
    <div className={styles.tech_container}>
<h1>Technology</h1>

<div className={styles.tech_sub}>
    <Link href='https://en.wikipedia.org/wiki/HTML' target='_blank' >
    <AiFillHtml5 className={styles.htmlico} />
    </Link>
    <Link href='https://en.wikipedia.org/wiki/css' target='_blank' >
    <FaCss3Alt className={styles.cssico}/>
    </Link>

    <Link href='https://en.wikipedia.org/wiki/javascript' target='_blank' >

    <DiJavascript1 className={styles.jsico} />
    </Link>

    <Link href='https://reactjs.org/'>

    <DiReact className={styles.reactico}/>

</Link>
    <Link href='https://nextjs.org/'>
    <TbBrandNextjs className={styles.nextico}/>
    </Link>
</div>
    </div>
  )
}

export default Technology