import React from "react"
import { render } from "@testing-library/react"

import Layout from "../../components/layout"
import siteMetadata from "../fixtures/site-metadata"
import locations from "../fixtures/locations"

describe("<Layout/>", () => {
  it("renders the title in the homepage", () => {
    const { title } = siteMetadata
    const { getByRole } = render(
      <Layout title={title} location={locations.home} />
    )

    expect(getByRole("heading")).toHaveTextContent(title)
  })
})
