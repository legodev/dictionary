import styles from './page.module.css'
import Letter from '../components/Letter'
import Link from 'next/link'

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i).toLowerCase()
)

export default function Dictionary() {
  return (
    <>
      <main className={styles.mainContainer}>
        {alphabet.map((i, index) => (
          <Letter key={index} href={`./${i}`} letterClass={i}>
            {i.toString().toUpperCase()}
          </Letter>
        ))}
      <section className={styles.section}>
        <Link className={styles.mainLink} href={"./"}>Previous</Link>
        <Link className={styles.mainLink} href={"./a"}>Next</Link>
      </section>
      </main>
    </>
  )
}
