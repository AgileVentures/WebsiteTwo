import React from "react"
import { render } from "@testing-library/react"

import Header from "../../components/header"

describe("<Header/>", () => {
  it("renders the logo in the homepage", () => {
    const { getByTestId } = render(<Header />)

    expect(getByTestId("logo"))
  })
})
