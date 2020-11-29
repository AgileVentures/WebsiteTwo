import React from "react"
import { DateTime } from "luxon"
import { useQuery, gql } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"

const EVENT = gql`
  query showEvent($slug: String!) {
    event(slug: $slug) {
      id
      name
      repeats
      startDatetime
      timeZone
      duration
      category
      description
    }
  }
`

export const PureEventShow = ({ data }) => (
  <div>
    <h2 className="text-2xl font-bold">{data.event.name}</h2>
    <div>{data.event.description}</div>
    <div>Event type: {data.event.category}</div>
    <FontAwesomeIcon icon="calendar" />
    <span className="month text-gray-700">
      {" "}
      {DateTime.fromISO(data.event.startDatetime).toLocaleString(
        DateTime.DATE_MED_WITH_WEEKDAY
      )}
    </span>
    <br />
    <FontAwesomeIcon icon="clock" />
    <span className="text-gray-700">
      {" "}
      {DateTime.fromISO(data.event.startDatetime).toLocaleString(
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
  if (error) return <p>Error :(</p>

  return <PureEventShow data={data} />
}

export default EventShow
