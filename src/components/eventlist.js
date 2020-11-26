import React from "react"
import { StaticQuery, graphql } from "gatsby"
import moment from "moment"
import { useQuery, gql } from "@apollo/client"

export const PureEventList = ({ data }) => (
  <div>
    {data.av.events.map(e => (
      <div className="bg-white rounded shadow border p-6 mb-4 mt-0">
        <h2 className="text-2xl font-bold">{e.name}</h2>
        <div className="text-gray-700">
          {moment(e.startDatetime).format("dddd MMMM Do, YYYY hh:mma")}
        </div>
      </div>
    ))}
  </div>
)

export function EventList() {
  return (
    <StaticQuery
      query={graphql`
        {
          av {
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
      `}
      render={data => <PureEventList data={data} />}
    />
  )
}

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

export default function DynamicEventList() {
  const { loading, error, data } = useQuery(EVENTS_LIST)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data.upcomingEvents.map(e => (
        <div className="bg-white rounded shadow border p-6 mb-4 mt-0">
          <h2 className="text-2xl font-bold">{e.event.name}</h2>
          <div className="text-gray-700">
            {moment(e.time).format("dddd MMMM Do, YYYY hh:mma")}
          </div>
        </div>
      ))}
    </div>
  )
}
