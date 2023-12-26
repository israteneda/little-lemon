import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

function Button({
  children,
  type = 'button',
  ariaLabel,
  disabled,
  onClick,
  extraClasses,
}: {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
  extraClasses?: string;
}) {
  const classNames = cn(styles.button, extraClasses, {
    [styles.disabled]: disabled,
  });

  return (
    <button aria-label={ariaLabel} type={type} onClick={onClick} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
