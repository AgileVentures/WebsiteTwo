import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="uppercase mb-6 font-bold">Learn More</h3>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="no-underline">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="no-underline">
                  Getting Started
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="no-underline">
                  Dashboard
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="no-underline">
                  Opportunities
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="no-underline">
                  Blog
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="no-underline">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="uppercase mb-6 font-bold">Social</h3>
            <ul className="mb-4">
              <li className="mt-2">
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
              <li className="mt-2">
                <a
                  className="twitter"
                  href="https://twitter.com/AgileVentures"
                  target="_blank"
                  rel="noreferrer"
                  style={{ "white-space": `nowrap` }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  &nbsp;Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="uppercase mb-6 font-bold">Our Sponsors</h3>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="https://standuply.com/?utm_source=links&amp;utm_medium=agileventures&amp;utm_campaign=partnership"
                  target="_blank"
                  rel="noreferrer"
                >
                  Standup Bot
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="http://craftacademy.se/english"
                  target="_blank"
                  rel="noreferrer"
                >
                  Craft Academy
                </a>
              </li>
              <li className="mt-2">
                <a href="http://mooqita.org/" target="_blank" rel="noreferrer">
                  Mooqita
                </a>
              </li>
              <li className="mt-2">
                <a href="#" target="_blank" rel="noreferrer">
                  Becoming a sponsor
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="uppercase mb-6 font-bold">Contact Us</h3>
            <ul className="mb-4">
              <li className="mt-2">
                <p>
                  Send a traditional email to &nbsp;
                  <a href="mailto:info@agileventures.org">
                    info@agileventures.org
                  </a>
                  .
                </p>
              </li>
              <li className="mt-2">
                <p>
                  We are a Charitable Incorporated Organisation (CIO) in the UK.
                  Ref #1170963
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
