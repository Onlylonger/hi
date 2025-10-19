import { ProjectApiContentAside } from './ProjectApiContentAside'
import { ProjectApiContentContextProvider } from './ProjectApiContentContext'
import { Tabs } from './Tabs'
import { ProjectApiContentMain } from './ProjectApiContentMain'

const ProjectApiContent = () => {
  return (
    <div className="flex h-full w-full">
      <ProjectApiContentContextProvider>
        <ProjectApiContentAside />
        <div className="flex-1 overflow-hidden">
          <Tabs />
          <ProjectApiContentMain />
        </div>
      </ProjectApiContentContextProvider>
    </div>
  )
}

export default ProjectApiContent
