import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventList = ({ events }) => (
  <div>
    {events.map(event => (
      <h2>{event.name}</h2>
    ))}
  </div>
)

const EventIndex = ({ data, location }) => {
  return (
    <Layout location={location} title="Events">
      <SEO title="All events" />
      <header>
        <EventList events={data.events.events} />
      </header>
    </Layout>
  )
}

export default EventIndex

export const query = graphql`
  {
    events {
      events {
        id
        name
        repeats
        startDatetime
        timeZone
        duration
        category
      }
    }
  }
`
