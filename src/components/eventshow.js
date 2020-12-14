import React from "react"
import { DateTime } from "luxon"
import { useQuery, gql } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"

const EVENT = gql`
  query nextEvent($slug: String!) {
    nextEvent(slug: $slug) {
      event {
        id
        category
        duration
        name
        repeats
        startDatetime
        timeZone
        description
      }
      time
    }
  }
`

export const PureEventShow = ({ data }) => (
  <div>
    <h2 className="text-2xl font-bold" id="name">
      {data.nextEvent.event.name}
    </h2>
    <div>{data.nextEvent.event.description}</div>
    <hr className="h-0.5" />
    <div>Event type: {data.nextEvent.event.category}</div>
    <hr className="h-0.5" />
    <div className="text-xl">Next Scheduled Event:</div>
    <FontAwesomeIcon icon="calendar" />
    <span className="month text-gray-700">
      {" "}
      {DateTime.fromISO(data.nextEvent.time).toLocaleString(
        DateTime.DATE_MED_WITH_WEEKDAY
      )}
    </span>
    <br />
    <FontAwesomeIcon icon="clock" />
    <span className="text-gray-700">
      {" "}
      {DateTime.fromISO(data.nextEvent.time).toLocaleString(
        DateTime.TIME_SIMPLE
      )}
    </span>
  </div>
)

const EventShow = ({ slug }) => {
  const { loading, error, data } = useQuery(EVENT, {
    variables: { slug },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return <PureEventShow data={data} />
}

export default EventShow
