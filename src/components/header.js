import React from "react"
import { Link } from "gatsby"
import logo from "../../static/logo.png"

const Header = () => {
  return (
    <header className="flex h-16 bg-header">
      <Link to="/" className="shadow-none flex-1 text-center px-4 py-2 m-2">
        <img id="logo" data-testid="logo" src={logo} alt="Agile Ventures" />
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <li
          style={{
            display: `inline-block`,
            marginRight: `1rem`,
            marginTop: "10%",
          }}
        >
          <Link to="/login/">Log In</Link>
        </li>
        <li
          style={{
            display: `inline-block`,
            marginRight: `1rem`,
            marginTop: "10%",
          }}
        >
          <Link to="/signup/">Sign Up</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
