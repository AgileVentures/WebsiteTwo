import React from "react"
import { useQuery, gql } from "@apollo/client"

const PROJECTS_LIST = gql`
  query listProjects {
    projects {
      title
      id
      slug
    }
  }
`

export const PureProjectList = ({ data }) => (
  <div>
    {data.projects.map(p => (
      <div
        className="bg-white rounded shadow border p-6 mb-4 mt-0"
        key={`project-${p.id}`}
      >
        <h2 className="text-2xl font-bold">
          <a href={`/projects/${p.slug}`}>{p.title}</a>
        </h2>
        <div>{p.description}</div>
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
