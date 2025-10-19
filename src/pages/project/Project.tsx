import { useParams } from 'react-router'
import { Layout } from '../dashboard/Layout'
import { ProjectMenuType, useProjectAsideStore } from './project-aside-store'
import { Activity, Suspense } from 'react'
import { ProjectASide } from './ProjectASide'

import ProjectApiContent from './project-api/ProjectApiContent'
import ProjectTestContent from './ProjectTest'
import ProjectSettingContent from './ProjectSetting'

// const LazyProjectApiContent = lazy(() => import('./ProjectApi'))
// const LazyProjectTestContent = lazy(() => import('./ProjectTest'))
// const LazyProjectSettingContent = lazy(() => import('./ProjectSetting'))

const ProjectMenuTypeMapComp = {
  [ProjectMenuType.Api]: ProjectApiContent,
  [ProjectMenuType.Test]: ProjectTestContent,
  [ProjectMenuType.Setting]: ProjectSettingContent,
}

const ProjectContent = () => {
  const current = useProjectAsideStore((state) => state.current)
  const menuList = useProjectAsideStore((state) => state.menuList)

  return (
    <>
      {menuList.map((menu) => {
        const Comp = ProjectMenuTypeMapComp[menu.key]
        return (
          <Suspense fallback={<div>Loading...</div>} key={menu.key}>
            <Activity mode={current === menu.key ? 'visible' : 'hidden'}>
              <Comp />
            </Activity>
          </Suspense>
        )
      })}
    </>
  )
}

export default function ProjectPage() {
  const { id } = useParams()

  return (
    <div className="flex bg-neutral-50">
      <ProjectASide />
      <Layout
        classNames="flex-1"
        headerLeft={id}
        headerRight={'undefined'}
        sidebar={''}
        content={<ProjectContent />}
      />
    </div>
  )
}
