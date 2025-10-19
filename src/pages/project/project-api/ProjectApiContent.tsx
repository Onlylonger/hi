import { ProjectApiContentAside } from './ProjectApiContentAside'
import { ProjectApiContentContextProvider } from './ProjectApiContentContext'
import { Tabs } from './Tabs'
import { ProjectApiContentMain } from './ProjectApiContentMain'

const ProjectApiContent = () => {
  return (
    <div className="flex h-full min-h-0">
      <ProjectApiContentContextProvider>
        <ProjectApiContentAside />
        <div>
          <Tabs />
          <ProjectApiContentMain />
        </div>
      </ProjectApiContentContextProvider>
    </div>
  )
}

export default ProjectApiContent
