import React from "react"
import renderer from "react-test-renderer"
import { PureEventList as EventList } from "../../components/eventlist"
import upcomingEvents from "../fixtures/upcoming-events"

describe("EventList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EventList data={upcomingEvents} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
