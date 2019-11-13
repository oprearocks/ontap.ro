import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Modal, { ModalTypes } from "./modal"
import SignUp from "./signup"
import Login from "./login"

const Header = ({ siteTitle }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [modalType, setModalType] = useState("login")
  const toggleDialog = () => setShowDialog(!showDialog)
  const handleOnClick = e => {
    e.preventDefault()
    const href = e.target.getAttribute("href").replace("#", "")
    setModalType(href)
    debugger
    toggleDialog()
  }
  const phoneNumberRef = useRef()
  return (
    <div className="w-full bg-gray-900 text-white py-6 font-mono">
      <Modal focusRef={phoneNumberRef} showDialog={showDialog} onDismiss={toggleDialog}>
        {modalType === ModalTypes.LOGIN ? (
          <Login focusRef={phoneNumberRef} />
        ) : (
          <SignUp focusRef={phoneNumberRef} />
        )}
      </Modal>
      <header className="max-w-5xl m-auto flex justify-between items-center">
        <h1 className="font-bold lowercase font-mono text-2xl">
          <Link to="/">ontap.ro</Link>
        </h1>
        <nav>
          <ul>
            <li className="inline-block m-2">
              <a
                className="underline px-2 py-4 font-bold"
                href="#login"
                onClick={handleOnClick}
              >
                Log in
              </a>
            </li>
            <li className="inline-block m-2">
              <a
                href="#signup"
                onClick={handleOnClick}
                className="cta cta--small px-2 py-4 font-bold bg-white text-gray-900"
              >
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
