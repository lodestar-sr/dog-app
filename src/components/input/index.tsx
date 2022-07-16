import React, { ChangeEventHandler } from 'react';

import './styles.scss';
import clsx from 'clsx';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string;
  label?: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = (props: InputProps): React.ReactElement => {
  const {
    className,
    type = 'text',
    placeholder,
    label,
    value,
    onChange,
    ...rest
  } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange && onChange(event);
  };

  return (
    <div className={clsx('relative', className)}>
      {label && <div className="placeholder">{label}</div>}

      <input
        className="styled-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
