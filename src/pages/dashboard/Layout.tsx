import clsx from 'clsx'

export const Layout = (props: {
  headerLeft: React.ReactNode
  headerRight: React.ReactNode
  /** Expect a container element */
  sidebar: React.ReactNode
  content: React.ReactNode
  classNames?: string
}) => {
  const { headerLeft, headerRight, sidebar, content, classNames } = props

  return (
    <div
      className={clsx(
        'flex h-svh flex-col overflow-hidden bg-neutral-50',
        classNames,
      )}
    >
      <div className="flex h-12 shrink-0 justify-between pl-2">
        <div className="flex items-center gap-1">{headerLeft}</div>
        <div className="flex items-center gap-1">{headerRight}</div>
      </div>
      <div className="border-neutral-150 mx-2 mb-2 flex min-h-0 flex-1 rounded-md border bg-white">
        {sidebar}
        {content}
      </div>
    </div>
  )
}
