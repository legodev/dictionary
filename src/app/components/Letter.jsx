import styles from "./Letter.module.css"

import Link from 'next/link'
export default function Letter({letterClass, href, children}) {
  return (
    <Link className={`${styles.mainLink} ${styles[letterClass]}`} href={href}>
      {children}
    </Link>
  )
}
