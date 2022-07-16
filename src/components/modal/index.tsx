import React from 'react';
import clsx from 'clsx';

import Button from '../button';

import './styles.scss';

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  closeLabel?: string;
  confirmLabel?: string;
  confirmDisabled?: boolean;
  onClose?: (isConfirm?: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  className = '',
  children,
  closeLabel = 'Close',
  confirmLabel = 'Ok',
  headerClassName,
  bodyClassName,
  footerClassName,
  confirmDisabled,
  title,
  onClose = () => null,
  ...rest
}) => (
  <div className="modal-container">
    <div className={clsx('modal-wrapper', className)} {...rest}>
      <div className={clsx('modal-header', headerClassName)}>{title}</div>
      <div className={clsx('modal-body', bodyClassName)}>{children}</div>
      <div className={clsx('modal-footer', footerClassName)}>
        <Button className="bg-red-300" onClick={() => onClose(false)}>
          {closeLabel}
        </Button>
        <Button
          className="ml-2 confirm-button"
          disabled={confirmDisabled}
          onClick={() => onClose(true)}
        >
          {confirmLabel}
        </Button>
      </div>
    </div>
    <div className="back-drop" onClick={() => onClose()} />
  </div>
);

export default Modal;
