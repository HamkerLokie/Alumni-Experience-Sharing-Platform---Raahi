import React, { Fragment } from 'react'

interface ModalProps {
  modalContent: string
  show: boolean
}
const Modal: React.FC<ModalProps> = ({ modalContent, show }) => {
  return (
    <Fragment>
      <div>{show}</div>
      <div>{modalContent}</div>
    </Fragment>
  )
}

export default Modal
