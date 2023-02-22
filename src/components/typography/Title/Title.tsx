import React from 'react'
import styles from './Title.module.scss'

function Title({
  children,
  tag,
}: {
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) {
  const Tag = tag || 'h1'
  return <Tag className={styles.title}>{children}</Tag>
}

export default Title
