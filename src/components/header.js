import React from "react"
import { Link } from "gatsby"
import logo from "../../static/logo.png"

const ListLink = ({ to, text }) => (
  <li
    style={{ display: `inline-block`, marginRight: `1rem`, marginTop: "10%" }}
  >
    <Link to={to}>{text}</Link>
  </li>
)

const Header = () => {
  return (
    <header className="flex h-16 bg-header">
      <Link to="/" className="shadow-none flex-1 text-center px-4 py-2 m-2">
        <img id="logo" data-testid="logo" src={logo} alt="Agile Ventures" />
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/login/" text="Log In" />
        <ListLink to="/signup/" text="Sign Up" />
      </ul>
    </header>
  )
}

export default Header
