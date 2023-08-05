import { clsx } from "clsx";
import React, { useCallback, useEffect, useRef } from "react";
import styles from "./temp-modal.module.css";

export interface ModalProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
  open?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  className,
  children,
  onClose,
  open = false,
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const showModal = useCallback(() => {
    if (!modalRef.current) return;
    modalRef.current.showModal();
  }, [modalRef]);

  const hideModal = useCallback(() => {
    if (!modalRef.current) return;
    modalRef.current.close();
  }, [modalRef]);

  const closeOnBackdropClick = useCallback(
    ({ target }) => {
      if (target === modalRef.current) modalRef.current.close();
    },
    [modalRef]
  );

  useEffect(() => {
    if (open) {
      showModal();
      return;
    }
    hideModal();
  }, [open, showModal, hideModal, onClose]);

  return (
    <dialog
      ref={modalRef}
      onClick={closeOnBackdropClick}
      onClose={onClose}
      className={clsx(styles.modal, className)}
    >
      {open && children}
    </dialog>
  );
};

export default Modal;
