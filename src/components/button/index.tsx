import React from 'react';
import clsx from 'clsx';

import './styles.scss';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...rest
}) => (
  <button className={clsx('default-button', className)} {...rest}>
    {children}
  </button>
);

export default Button;
