import React from "react"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

const Modal = ({ children, showDialog, onDismiss, focusRef }) => {
  return (
    <Dialog
      aria-label="Modal window"
      className="w-full md:w-3/4 lg:w-1/2"
      isOpen={showDialog}
      onDismiss={onDismiss}
      initialFocusRef={focusRef}
    >
      <button
        className="text-3xl text-gray-600 -ml-6 -mt-6"
        onClick={onDismiss}
      >
        ⓧ
      </button>
      {children}
    </Dialog>
  )
}

export const ModalTypes = {
  LOGIN: "login",
  SIGN_UP: "signup",
}

export default Modal
