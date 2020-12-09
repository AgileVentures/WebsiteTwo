import React from "react"
import { render, screen } from "@testing-library/react"
import { ApolloProvider } from "@apollo/client"
import { client } from "../ApolloClient"
import EventList from "../../components/eventlist"

describe("EventListTest", () => {
  it("should show the events", async () => {
    render(
      <ApolloProvider client={client}>
        <EventList />
      </ApolloProvider>
    )
    const thediv1 = await screen.findByText("BigEvent1")
    expect(thediv1).toBeVisible()
    const thediv2 = await screen.findByText("BigEvent2")
    expect(thediv2).toBeVisible()
    const thediv3 = await screen.findByText("BigEvent3")
    expect(thediv3).toBeVisible()
  })
})
