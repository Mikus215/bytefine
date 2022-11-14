import React from 'react'
import ReactDom from 'react-dom'

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children,  }) => {
    if (!isOpen) return null

    return ReactDom.createPortal(
      <>
        <div className='modal__overlay'></div>
        <div className='modal__body'>
            { children }
        </div>
      </>,
      document.getElementById('modal')!
    )
}
export default Modal;