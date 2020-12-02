import React from "react"
import renderer from "react-test-renderer"
import { PureEventShow as EventShow } from "../../components/eventshow"
import event from "../fixtures/event"

describe("EventShow", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EventShow data={event} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
