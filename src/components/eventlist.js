import React from "react"
import { StaticQuery, graphql } from "gatsby"

export const PureEventList = ({ data }) => (
  <div>
    {data.av.events.map(e => (
      <div className="bg-white rounded shadow border p-6 mb-4 mt-0">
        <h2 className="text-2xl font-bold">{e.name}</h2>
        <div className="text-gray-700">{e.startDatetime}</div>
      </div>
    ))}
  </div>
)

export default function EventList() {
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
