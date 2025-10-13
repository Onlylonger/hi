import { Button } from '@shilong/react'
import { useProjectAsideStore } from './project-aside-store'

export const ProjectASide = () => {
  const menuList = useProjectAsideStore((state) => state.menuList)
  const current = useProjectAsideStore((state) => state.current)
  const updateCurrent = useProjectAsideStore((state) => state.updateCurrent)

  return (
    <div className="flex h-full w-20 shrink-0 flex-col gap-1">
      {menuList.map((item) => (
        <Button
          key={item.key}
          className="w-full"
          variant={current === item.key ? 'default' : 'link'}
          onClick={() => updateCurrent(item.key)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}
