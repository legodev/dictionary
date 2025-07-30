import styles from './Structure.module.css'
import Link from 'next/link'

export default function Structure({ letter, previous, next, children }) {
  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>{letter}</h2>
      <div className={styles.wordContainer}>{children}</div>
      <section className={styles.section}>
        <Link className={styles.mainLink} href={previous}>
          Previous
        </Link>
        <Link className={styles.mainLink} href={next}>
          Next
        </Link>
      </section>
    </main>
  )
}
