import React from 'react'
import ProjectItem from '../components/ProjectItem'

function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectlist'>
      <ProjectItem name="Full Stack Website" />
      <ProjectItem name="Blood Bank"/>
      <ProjectItem />
      </div>
    </div>
  )
}

export default Projects