import { ProjectApiContentAside } from './ProjectApiContentAside'
import { ProjectApiContentContextProvider } from './ProjectApiContentContext'
import { Tabs } from './Tabs'
import { ProjectApiContentMain } from './ProjectApiContentMain'

const ProjectApiContent = () => {
  return (
    <div className="flex h-full min-h-0 w-full">
      <ProjectApiContentContextProvider>
        <ProjectApiContentAside />
        <div className="min-w-0 flex-1">
          <Tabs />
          <ProjectApiContentMain />
        </div>
      </ProjectApiContentContextProvider>
    </div>
  )
}

export default ProjectApiContent
