import React from "react"

import logo from "../../static/logo.png"

const Header = () => {
  return (
    <header className="flex h-16 bg-header">
      <a href="/" className="shadow-none flex-1 text-center px-4 py-2 m-2">
        <img id="logo" data-testid="logo" src={logo} alt="Agile Ventures" />
      </a>
    </header>
  )
}

export default Header
