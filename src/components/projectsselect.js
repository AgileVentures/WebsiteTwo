import React from "react"
import { useQuery, gql } from "@apollo/client"
import "../utils/font-awesome"

const PROJECTS_LIST = gql`
  query listProjects {
    projects {
      name
    }
  }
`

export const PureProjectList = ({ data }) => (
  <div>
    {data.projects.map(e => (
      <div
        className="bg-white rounded shadow border p-6 mb-4 mt-0"
        key={`project-${e.project.id}`}
      >
        e.project.name
      </div>
    ))}
  </div>
)

export default function ProjectList() {
  const { loading, error, data } = useQuery(PROJECTS_LIST)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <PureProjectList data={data} />
}
