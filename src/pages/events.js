import React from "react"
import EventList from "../components/eventlist"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventIndex = ({ data, location }) => {
  return (
    <Layout location={location} title="Events">
      <SEO title="All events" />
      <header>
        <EventList />
      </header>
    </Layout>
  )
}

export default EventIndex
