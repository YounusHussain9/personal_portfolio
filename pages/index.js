import Head from "next/head";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
import Social from "../components/Socials/Social";
import Nav from "../components/Navbar/NavComponent";
import ProgressBar from "react-bootstrap/ProgressBar";

import styles from "../styles/Home.module.css";
import Skill from "../components/Skills/Skills.js/Technology";

export default function Home() {
  return (
    <>
      <Head>
        <title>Younus Hussain-Portfolio</title>
        <meta
          name="description"
          content="This is my personal portfolio, i  create it by using NextJS  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/logo.png" />
      </Head>

          <Nav   />
      <header id="home">
        <section className={`container ${styles.a} g-0`}>
          <div className={styles.hero_section}>
            <div className={styles.overlay}></div>

            <div className={styles.hero_content}>
              <span className={styles.hero_content_greet}>Hello</span>
              <h1 className={styles.hero_content_intro}>I am Younus </h1>
              <span className={styles.hero_content_skill}>
                Front-end React / Next Developer
              </span>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="container g-0 ">
          <div className={styles.intro_container}>
            <Image
              src="/static/bg.jpg"
              width={200}
              height={200}
              className={styles.dp}
              alt="background-image"
            />
            <div className={styles.intro_subcontainer} id="about">
              <h3 className={styles.intro_sub_name}>Younus Hussain</h3>
              <h6 className={styles.intro_sub_designation}>React Developer</h6>
              <p className={styles.intro_sub_p}>
                I am a React and Frontend Developer from Karachi, Pakistan.
                Experienced in creating user-friendly websites . <br /> I love
                to convert Figma/PSD files into perfect website with a smooth
                experience that users love and make use of. I design responsive
                website for mobile, tablet, laptop. I am currently complete my
                graduation in Computer Science (BSCS)
                <br />I use different tools to create website vsCode, Figma and
                many more tools & extensions
              </p>
            </div>
          </div>
<Skill />
          <div className={styles.portfolio} id="portfolio">
            <h3>Portfolio</h3>
            <div className={` ${styles.portfolio_sub}`}>
              <div className={styles.portfolio_box1}>
                <Image
                  src="/static/boxImg.png"
                  width={300}
                  height={300}
                  alt="img"
                />
              </div>
              <div className={styles.portfolio_box2}>
                {" "}
                <Image
                  src="/static/boxImg.png"
                  width={300}
                  height={300}
                  alt="img"
                />
              </div>
              <div className={styles.portfolio_box3}>
                {" "}
                <Image
                  src="/static/boxImg.png"
                  width={300}
                  height={300}
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <div className={styles.contact_sub} id="contact">
              <ul>
                <li>
                  <FaPhoneAlt />
                  +92-3131805259
                </li>
                <li>
                  <MdLocationPin />
                  Karachi, Pakistan
                </li>
              </ul>

              <a href="mailto:younushussain0@gmail.com">
                <MdOutlineMailOutline /> Send Email
              </a>
            </div>
          </div>

          <div className={styles.footer}>
            <h4>Younus</h4>
            <h5>iCode, iCreate, iBuild</h5>
            <Social />
          </div>
        </section>
      </main>
    </>
  );
}
