import React from "react"
import { render, screen } from "@testing-library/react"
import { ApolloProvider } from "@apollo/client"
import { client } from "../ApolloClient"
import EventShow from "../../components/eventshow"

const eventSlug = {
  slug: "my-new-event",
}

describe("EventShowTest", () => {
  it("should show the event", async () => {
    render(
      <ApolloProvider client={client}>
        <EventShow data={eventSlug} />
      </ApolloProvider>
    )

    const thediv = await screen.findByText("My New Event")
    expect(thediv).toBeVisible()
  })
})
