import { Input } from '@shilong/react'
import { ProjectApiContentAside } from './ProjectApiContentAside'
import { ProjectApiContentContextProvider } from './ProjectApiContentContext'
import { Tabs } from './Tabs'

const ProjectApiContent = () => {
  return (
    <div className="flex h-full min-h-0">
      <ProjectApiContentContextProvider>
        <ProjectApiContentAside />
        <div>
          <Tabs />
          <div>
            API Contentcc2
            <Input />
          </div>
        </div>
      </ProjectApiContentContextProvider>
    </div>
  )
}

export default ProjectApiContent
