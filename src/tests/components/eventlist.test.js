import React from "react"
import renderer from "react-test-renderer"
import { PureEventList as EventList } from "../../components/eventlist"
import events from "../fixtures/events"

describe("EventList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EventList data={events} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
