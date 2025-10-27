import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from './styles.module.scss';

interface ModalProps {
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

  return createPortal(
    <div className={styles['modal-wr']}>
      {children}
    </div>,
    modalRoot
  );
}