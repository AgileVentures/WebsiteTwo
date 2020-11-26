import React from "react"
import moment from "moment"
import { useQuery, gql } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"

const EVENTS_LIST = gql`
  query {
    upcomingEvents {
      event {
        id
        name
        repeats
        startDatetime
        timeZone
        duration
        category
      }
      time
    }
  }
`

export const PureEventList = ({ data }) => (
  <div>
    {data.upcomingEvents.map(e => (
      <div className="bg-white rounded shadow border p-6 mb-4 mt-0">
        <h2 className="text-2xl font-bold">{e.event.name}</h2>
        <FontAwesomeIcon icon="calendar" />
        <span className="month text-gray-700">
          {moment(e.time).format("dddd MMMM Do, YYYY")}
        </span>
        <br />
        <FontAwesomeIcon icon="clock" />
        <span className="text-gray-700">{moment(e.time).format("hh:mma")}</span>
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
