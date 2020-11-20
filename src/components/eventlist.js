import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
      render={data => (
        <div>
          {data.av.events.map(e => (
            <h2>{e.name}</h2>
          ))}
        </div>
      )}
    />
  )
}
