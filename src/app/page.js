import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.mainContainer}>
        <h1 className={styles.mainTitle}>IT Dictionary</h1>
        <section className={styles.sectionContainer}>
          <article>
            <h3 className={styles.sectionSubtitle}>Technical English I</h3>
          </article>
          <article className={styles.sectionArticle}>
            <p className={styles.sectionP}>
              <span className={styles.sectionSpan}>Names:</span> Leonardo
              González and Faustino Peña
            </p>
            <p className={styles.sectionP}>
              <span className={styles.sectionSpan}>Group:</span> 2MB
            </p>
          </article>
        </section>
        <Link className={styles.mainLink} href="/letters">
          Next
        </Link>
      </main>
    </div>
  )
}
