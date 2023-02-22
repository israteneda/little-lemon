import React from 'react'
import styles from './Subtitle.module.scss'

function Subtitle({ children }: { children: React.ReactNode }) {
  return <p className={styles.subtitle}>{children}</p>
}

export default Subtitle
