import React from "react"
import DynamicEventList from "../components/eventlist"
import Layout from "../components/layout"
import SEO from "../components/seo"

const EventIndex = ({ data, location }) => {
  return (
    <Layout location={location} title="Events">
      <SEO title="All events" />
      <header>
        <h1 className="text-2xl font-bold">AgileVentures Events</h1>
        <div className="mb-4">
          We host several events a day using different services. Feel free to
          join in to get involved or if you are curious about pair programming
          or Agile Ventures.
          <span className="font-bold">
            {" "}
            Each event will have a link to the hangout below.
          </span>{" "}
          You can also add events to your calendar.
        </div>
        <DynamicEventList />
      </header>
    </Layout>
  )
}

export default EventIndex
