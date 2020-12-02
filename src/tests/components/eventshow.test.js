import React from "react"
import renderer from "react-test-renderer"
import { PureEventShow as EventShow } from "../../components/eventshow"
import nextEvent from "../fixtures/nextevent"

describe("EventShow", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EventShow data={nextEvent} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
