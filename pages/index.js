import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import NavBar from 'components/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Outsource Accelerator</title>
        <meta name="description" content="Outsource Accelerator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span className={styles.slant_border}></span>
      <span className={styles.slant_border2}></span>
      <NavBar/>
      <main className={styles.main}>
        <section className={styles.hero_container}>
          <div className={styles.hero}>
            <h1 className={styles.hero_title__top}>Data to enrich your</h1>
            <h1 className={styles.hero_title__bot}>offshore business</h1>
            <p className={styles.hero_content}>
              Porta luctus posuere est curae purus orci venenatis natoque nibh fringilla magna condimentum praesent dictumst.
              Arcu porttitor habitasse mauris parturient facilisi consectetur montes massa litora.
            </p>
            <div  className={styles.hero_btn}>
              <button className={styles.hero_primary_btn}>Get started</button>
              <button className={styles.hero_secondary_btn}>View recent leads</button>
            </div>
          </div>
        </section>
      </main>
      <img className={styles.image_cover} src="./assets/photo.jpg" alt=""/>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
