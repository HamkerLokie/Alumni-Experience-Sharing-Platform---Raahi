import React, { Fragment } from 'react'

interface ModalProps {
  modalContent: string
  show: boolean
  onHide: () => void
}
const Modal: React.FC<ModalProps> = ({ modalContent, show, onHide }) => {
  return (
    <Fragment>
      <div>{show}</div>
      <div>{modalContent}</div>
    </Fragment>
  )
}

export default Modal
