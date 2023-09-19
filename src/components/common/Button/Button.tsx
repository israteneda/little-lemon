import React from "react";
import styles from './Button.module.scss';
import cn from 'classnames';

function Button({ children, onClick, extraClasses }: { children: React.ReactNode; onClick?: () => void; extraClasses?: string}) {
  const classNames = cn(styles.button, extraClasses);

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
