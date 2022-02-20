import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import style from './style.module.scss';

const Modal = function Modal({ switcher, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.key === 'Escape') {
      switcher();
    }
  };
  const handleClose = e => {
    if (e.currentTarget === e.target) {
      switcher();
    }
  };

  return createPortal(
    <div className={style.Overlay} onClick={handleClose}>
      <div className={style.Modal}>{children}</div>
    </div>,
    document.getElementById('modalRoot'),
  );
};

Modal.propTypes = {
  switcher: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
