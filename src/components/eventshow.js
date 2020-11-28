import React from "react"
import { DateTime } from "luxon"
import { useQuery, gql } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"

const EVENT = gql`
  query {
    event(slug: "atlantic-scrum") {
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

export const PureEventList = ({ data }) => (
  <div>
    <div className="bg-white rounded shadow border p-6 mb-4 mt-0">
      <h2 className="text-2xl font-bold">{data.event.name}</h2>
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
      <div>{data.event.description}</div>
    </div>
  </div>
)

export default function EventShow(slug) {
  const { loading, error, data } = useQuery(EVENT)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <PureEventList data={data} />
}
