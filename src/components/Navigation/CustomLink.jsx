import { NavLink } from 'react-router-dom';

import cn from 'clsx';

import styles from './style.module.css';

export const CustomLink = ({ to, children, icon = null }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(styles.link, isActive && styles.active)}
    >
      {icon && icon}
      <span>{children}</span>
    </NavLink>
  );
};
