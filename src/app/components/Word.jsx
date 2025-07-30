import styles from './Word.module.css'

export default function Word({ subtitle, paragraph }) {
  return (
    <section className={styles.wordSection}>
      <h4 className={styles.wordSubtitle}>{subtitle}</h4>
      <p className={styles.wordText}>{paragraph}</p>
    </section>
  )
}
