import React from 'react'
import styles from './Modal.module.scss'

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}

export default Modal
