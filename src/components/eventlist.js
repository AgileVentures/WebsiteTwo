import React from "react"
import { DateTime } from "luxon"
import { useQuery, gql } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"

const EVENTS_LIST = gql`
  query listEvents {
    upcomingEvents {
      event {
        id
        name
        repeats
        startDatetime
        timeZone
        duration
        category
        description
        slug
      }
      time
    }
  }
`

export const PureEventList = ({ data }) => (
  <div>
    {data.upcomingEvents.map(e => (
      <div
        className="bg-white rounded shadow border p-6 mb-4 mt-0"
        key={`event-${e.event.id}-${DateTime.fromISO(e.time).toLocaleString(
          DateTime.DATE_MED
        )}`}
      >
        <h2 className="text-2xl font-bold">
          <a href={`/events/${e.event.slug}`}>{e.event.name}</a>
        </h2>
        <FontAwesomeIcon icon="calendar" />
        <span className="month text-gray-700">
          {" "}
          {DateTime.fromISO(e.time).toLocaleString(
            DateTime.DATE_MED_WITH_WEEKDAY
          )}
        </span>
        <br />
        <FontAwesomeIcon icon="clock" />
        <span className="text-gray-700">
          {" "}
          {DateTime.fromISO(e.time).toLocaleString(DateTime.TIME_SIMPLE)}-
          {DateTime.fromISO(e.time)
            .plus({ minutes: e.event.duration })
            .toLocaleString(DateTime.TIME_SIMPLE)}
        </span>
        <div>{e.event.description}</div>
      </div>
    ))}
  </div>
)

export default function EventList() {
  const { loading, error, data } = useQuery(EVENTS_LIST)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <PureEventList data={data} />
}
