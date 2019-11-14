import React from "react"

const Footer = () => (
  <div className="w-full bg-gray-900 text-white py-6 font-mono flex">
    <footer className="m-auto">
      © {new Date().getFullYear()}, Adrian Oprea
    </footer>
  </div>
)

export default Footer
