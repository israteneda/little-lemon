import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

function Button({
  children,
  type = 'button',
  onClick,
  extraClasses,
}: {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  extraClasses?: string;
}) {
  const classNames = cn(styles.button, extraClasses);

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
