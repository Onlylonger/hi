import { Link, useNavigate } from 'react-router'
import { useAuthStore } from '../../modules/auth'
import { Bell, Home, Settings } from 'lucide-react'
import { Button } from '@shilong/react'
import { Layout } from './Layout'

const DashboardHeaderLeft = () => {
  return (
    <>
      <Home className="size-4" />
      <span>Home</span>
    </>
  )
}

const DashboardHeaderRight = () => {
  const removeToken = useAuthStore((state) => state.removeToken)
  const nav = useNavigate()

  const handleLogout = () => {
    removeToken()
    nav('/login', {
      replace: true,
    })
  }

  return (
    <>
      <Button variant="ghost" size="sm">
        <Bell className="size-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Settings className="size-4" />
      </Button>
      <div className="">
        <Button variant="ghost" onClick={handleLogout}>
          Sign Out
        </Button>
      </div>
    </>
  )
}

const DashboardSidebar = () => {
  return (
    <div className="border-neutral-150 flex w-[300px] shrink-0 flex-col border-r">
      <div className="flex h-16 shrink-0 items-center justify-center">Hia</div>
      <div className="flex-1 overflow-y-auto px-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae repudiandae eius dolorem nisi. Quaerat ut magnam maxime
          temporibus recusandae tempore voluptatem itaque? Aperiam temporibus
          tenetur nihil dolorum eius doloribus.
        </p>
      </div>
      <div className="h-[100px] shrink-0 px-2">Footer</div>
    </div>
  )
}

const DashboardContent = () => {
  const nav = useNavigate()

  return (
    <>
      <h1>Home page</h1>
      <Button variant="outline" onClick={() => nav('/project/1')}>
        Goto
      </Button>
    </>
  )
}

export default function DashboardPage() {
  return (
    <Layout
      headerLeft={<DashboardHeaderLeft />}
      headerRight={<DashboardHeaderRight />}
      sidebar={<DashboardSidebar />}
      content={<DashboardContent />}
    />
  )
}
