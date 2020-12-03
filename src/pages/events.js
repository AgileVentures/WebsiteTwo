import React from "react"
import { Router } from "@reach/router"
import EventList from "../components/eventlist"
import EventShow from "../components/eventshow"
import EventForm from "../components/eventform"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Default = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold text-center">AgileVentures Events</h1>
      <div className="mb-4">
        We host several events a day using different services. Feel free to join
        in to get involved or if you are curious about pair programming or Agile
        Ventures.
        <span className="font-bold">
          {" "}
          Each event will have a link to the hangout below.
        </span>
      </div>
      <EventList />
    </header>
  )
}

const EventIndex = ({ data, location }) => {
  return (
    <Layout location={location} title="Events">
      <SEO title="All events" />
      <Router basepath="/events">
        <EventForm path="/new" />
        <EventShow path="/:slug" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default EventIndex
