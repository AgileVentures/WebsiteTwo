import React from "react"
import { Router } from "@reach/router"
import ProjectList from "../components/projectlist"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Default = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold text-center">AgileVentures Projects</h1>
      <div className="mb-4">
        Feel free to get involved if you are curious about our projects.
      </div>
      <ProjectList />
    </header>
  )
}

const ProjectIndex = ({ data, location }) => {
  return (
    <Layout location={location} title="Projects">
      <SEO title="All projects" />
      <Router basepath="/projects">
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default ProjectIndex
