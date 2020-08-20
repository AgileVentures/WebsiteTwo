import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="flex bg-footer">
      <div>
        <h3>Social</h3>
        <ul>
          <li>
            <a
              className="facebook"
              href="https://www.facebook.com/agileventures"
              target="_blank"
              rel="noreferrer"
              style={{ "white-space": `nowrap` }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
              &nbsp;Facebook
            </a>
          </li>
          <li>
            <a
              className="twitter"
              href="https://twitter.com/AgileVentures"
              target="_blank"
              rel="noreferrer"
              style={{ "white-space": `nowrap` }}
            >
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Our Sponsors</h3>
        <ul>
          <li>
            <a
              href="https://standuply.com/?utm_source=links&amp;utm_medium=agileventures&amp;utm_campaign=partnership"
              target="_blank"
              rel="noreferrer"
            >
              Standup Bot
            </a>
          </li>
          <li>
            <a
              href="http://craftacademy.se/english"
              target="_blank"
              rel="noreferrer"
            >
              Craft Academy
            </a>
          </li>
          <li>
            <a href="http://mooqita.org/" target="_blank" rel="noreferrer">
              Mooqita
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>
          Send a traditional email to
          <a href="mailto:info@agileventures.org">info@agileventures.org</a>.
        </p>
        <p>
          We are a Charitable Incorporated Organisation (CIO) in the UK. Ref
          #1170963
        </p>
      </div>
    </footer>
  )
}

export default Footer
