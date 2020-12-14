import React from "react"
import { useQuery, gql } from "@apollo/client"
import "../utils/font-awesome"

const PROJECTS_LIST = gql`
  query listProjects {
    projects {
      title
      id
    }
  }
`

export class PureProjectSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { onChange } = this.props
    this.setState({ value: event.target.value }, () => {
      if (onChange) {
        onChange(this.state)
      }
    })
  }

  render() {
    const { value } = this.state
    const { data } = this.props
    return (
      <div>
        <select
          value={value}
          onChange={this.handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="0"> </option>
          {data.projects.map(p => (
            <option value={p.id}>{p.title}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default function ProjectSelect() {
  const { loading, error, data } = useQuery(PROJECTS_LIST)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <PureProjectSelect data={data} />
}
